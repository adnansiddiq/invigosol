import sys, json, cv2, numpy as np
src, out = sys.argv[1], sys.argv[2]
U = 6
im = cv2.imread(src)
big = cv2.resize(im, None, fx=U, fy=U, interpolation=cv2.INTER_CUBIC).astype(np.float32)
b, g, r = big[..., 0], big[..., 1], big[..., 2]
H, W = r.shape
rows = np.arange(H)[:, None]
split = 655 * U
soft = lambda m, s: cv2.GaussianBlur(m.astype(np.float32), (0, 0), s * U) > 0.5
colorful = (r - b) > 90
darkink = np.maximum(np.maximum(r, g), b) < 110
ratio = g / np.maximum(r, 1)

mark = soft(colorful & (rows < split), 1.5)
n, lab, st, _ = cv2.connectedComponentsWithStats(mark.astype(np.uint8))
big_ids = sorted([i for i in range(1, n) if st[i, cv2.CC_STAT_AREA] > (20 * U) ** 2], key=lambda i: st[i, cv2.CC_STAT_TOP])
ball, upper, sail = (lab == big_ids[0]), (lab == big_ids[1]), (lab == big_ids[2])

def contour(mask):
    cs, _ = cv2.findContours(mask.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    return max(cs, key=cv2.contourArea)[:, 0, :].astype(np.float64) / U

def gsmooth(p, sigma, closed=True):
    k = max(3, int(sigma * U * 3) | 1)
    if closed: pad = np.concatenate([p[-k:], p, p[:k]])
    else: pad = np.concatenate([np.repeat(p[:1], k, 0), p, np.repeat(p[-1:], k, 0)])
    x = cv2.GaussianBlur(pad[:, 0].reshape(-1, 1), (1, k), sigma * U)[:, 0][k:-k]
    y = cv2.GaussianBlur(pad[:, 1].reshape(-1, 1), (1, k), sigma * U)[:, 0][k:-k]
    return np.stack([x, y], 1)

def resample(p, n):
    d = np.r_[0, np.cumsum(np.linalg.norm(np.diff(p, axis=0), axis=1))]
    t = np.linspace(0, d[-1], n)
    return np.stack([np.interp(t, d, p[:, 0]), np.interp(t, d, p[:, 1])], 1)

def ang(a, b_):
    return np.degrees(np.arccos(np.clip(np.dot(a, b_) / (np.linalg.norm(a) * np.linalg.norm(b_) + 1e-9), -1, 1)))

def to_path(q, corner=35, closed=True):
    m = len(q)
    turn = [ang(q[i] - q[i - 1], q[(i + 1) % m] - q[i]) for i in range(m)]
    d = f'M{q[0][0]:.2f} {q[0][1]:.2f}'
    for i in range(m if closed else m - 1):
        p0, p1, p2, p3 = q[i - 1], q[i], q[(i + 1) % m], q[(i + 2) % m]
        if turn[i] > corner or turn[(i + 1) % m] > corner:
            # next to a corner: straight segment keeps corners crisp, no overshoot
            d += f' L{p2[0]:.2f} {p2[1]:.2f}'
        else:
            c1, c2 = p1 + (p2 - p0) / 6, p2 - (p3 - p1) / 6
            d += f' C{c1[0]:.2f} {c1[1]:.2f} {c2[0]:.2f} {c2[1]:.2f} {p2[0]:.2f} {p2[1]:.2f}'
    return d + ('Z' if closed else '')

def simplify(p, eps):
    return cv2.approxPolyDP((p * 100).astype(np.int32).reshape(-1, 1, 2), eps * 100, True)[:, 0, :] / 100

def mask_path(mask, sigma, eps, min_area=2, corner=35):
    cs, _ = cv2.findContours(mask.astype(np.uint8), cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    parts = []
    for c in cs:
        if cv2.contourArea(c) < (min_area * U) ** 2: continue
        p = c[:, 0, :].astype(np.float64) / U
        if sigma: p = gsmooth(p, sigma)
        q = simplify(p, eps)
        if len(q) >= 3: parts.append(to_path(q, corner))
    return ' '.join(parts)

# ---- upper swoosh: rebuild as three parallel stripes --------------------------
c = contour(upper)
tip = int(np.argmax(c[:, 0] - c[:, 1]))                   # top-right tip
left = c[:, 0] < c[:, 0].min() + 1.5
li = np.where(left)[0]
tl = li[np.argmin(c[li, 1])]; bl = li[np.argmax(c[li, 1])]
def arc(i0, i1):                                           # walk the contour from i0 to i1 the short way that avoids the left edge
    n_ = len(c)
    fwd = [(i0 + k) % n_ for k in range(((i1 - i0) % n_) + 1)]
    bwd = [(i0 - k) % n_ for k in range(((i0 - i1) % n_) + 1)]
    pick = fwd if not any(left[j] for j in fwd[3:-3]) else bwd
    return c[pick]
N = 260
T = resample(gsmooth(resample(arc(tl, tip), 400), 5.0, False), N)        # top edge, left -> tip
B = resample(gsmooth(resample(arc(bl, tip), 400), 5.0, False), N)        # bottom edge, left -> tip
T[-1] = B[-1] = c[tip]
t = np.linspace(0, 1, N)[:, None]
f1 = 0.26 * np.interp(t, [0, 0.6, 0.95], [1, 1, 0])        # top dark band, fades out
f2 = 1 - 0.17 * np.interp(t, [0, 0.7, 0.93], [1, 1, 0])                    # bottom dark band, thins to the tip
L1 = T + f1 * (B - T); L2 = T + f2 * (B - T)
poly = lambda a, b_: to_path(simplify(np.concatenate([a, b_[::-1]]), 0.35), 60)
upper_full = poly(T, B)
upper_top = poly(T, L1)
upper_bot = poly(L2, B)

# ---- sail: traced outline + traced dark inner swoosh, both smoothed ------------
sail_dark = soft((cv2.GaussianBlur(np.where(sail, ratio, 0.6), (0, 0), 1.5 * U) < 0.455) & sail, 1.2)
n2, lab2, st2, _ = cv2.connectedComponentsWithStats(sail_dark.astype(np.uint8))
sail_dark = lab2 == (1 + int(np.argmax(st2[1:, cv2.CC_STAT_AREA])))
sail_path = mask_path(sail, 1.8, 0.35, corner=22)
sail_dark_path = mask_path(sail_dark, 2.6, 0.35, corner=30)

# ---- ball ---------------------------------------------------------------------
(bx, by), br = cv2.minEnclosingCircle((contour(ball) * U).astype(np.float32))

# ---- wordmark -------------------------------------------------------------------
wb = soft(darkink & ~colorful & (rows >= split), 0.5)
wo = soft(colorful & (rows >= split), 0.5)
res = {
    'paths': {'upper': upper_full, 'upper_top': upper_top, 'upper_bot': upper_bot,
              'sail': sail_path, 'sail_dark': sail_dark_path,
              'word_black': mask_path(wb, 0.5, 0.4), 'word_orange': mask_path(wo, 0.6, 0.4)},
    'ball': [bx / U, by / U, br / U],
}
ys, xs = np.nonzero(mark); res['bbox'] = {'mark': [xs.min()/U, ys.min()/U, xs.max()/U, ys.max()/U]}
ys, xs = np.nonzero(wb | wo); res['bbox']['word'] = [xs.min()/U, ys.min()/U, xs.max()/U, ys.max()/U]
json.dump(res, open(out, 'w'))
print({k: len(v) for k, v in res['paths'].items()})
