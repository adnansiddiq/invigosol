import base64, subprocess, sys, os
from PIL import Image
K, OUT = sys.argv[1], sys.argv[2]
BZ = sys.argv[3]  # bizagent logo-dark svg
os.makedirs(OUT, exist_ok=True)

def b64(p):
    return base64.b64encode(open(p, 'rb').read()).decode()
def size(p):
    return Image.open(p).size
A = {n: (f'{K}/{n}.png', size(f'{K}/{n}.png')) for n in
     ['mark', 'mark-white', 'wordmark-white-text', 'wordmark-dark-text', 'stacked-white-text', 'stacked-dark-text']}
DATA = {n: b64(p) for n, (p, _) in A.items()}

def img(name, x, y, w=None, h=None, opacity=1):
    iw, ih = A[name][1]
    if w and not h: h = w * ih / iw
    if h and not w: w = h * iw / ih
    return f'<image x="{x:.0f}" y="{y:.0f}" width="{w:.0f}" height="{h:.0f}" opacity="{opacity}" href="data:image/png;base64,{DATA[name]}"/>', w, h

HEAD = 'font-family="Avenir Next" font-weight="800" font-style="italic"'
BODY = 'font-family="Avenir Next" font-weight="500"'
SEMI = 'font-family="Avenir Next" font-weight="600"'

def text(x, y, s, size, fill='#fff', font=BODY, anchor='start', extra=''):
    s = s.replace('&', '&amp;')
    return f'<text x="{x:.0f}" y="{y:.0f}" {font} font-size="{size:.0f}" fill="{fill}" text-anchor="{anchor}" {extra}>{s}</text>'

def defs(w, h, gx=0.85, gy=0.1):
    g = max(w, h) / 30
    return f'''<defs>
  <radialGradient id="glow" cx="{gx}" cy="{gy}" r="0.75"><stop offset="0" stop-color="#e8590c" stop-opacity="0.55"/><stop offset="0.6" stop-color="#e8590c" stop-opacity="0.08"/><stop offset="1" stop-color="#0a0807" stop-opacity="0"/></radialGradient>
  <radialGradient id="glow2" cx="0.05" cy="1" r="0.5"><stop offset="0" stop-color="#f8b10b" stop-opacity="0.18"/><stop offset="1" stop-color="#0a0807" stop-opacity="0"/></radialGradient>
  <linearGradient id="brand" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#f35b18"/><stop offset="0.5" stop-color="#f5780f"/><stop offset="1" stop-color="#f8b10b"/></linearGradient>
  <linearGradient id="bar" x1="0" x2="1"><stop offset="0" stop-color="#f35b18"/><stop offset="1" stop-color="#f8b10b"/></linearGradient>
  <pattern id="grid" width="{g:.1f}" height="{g:.1f}" patternUnits="userSpaceOnUse"><path d="M {g:.1f} 0 L 0 0 0 {g:.1f}" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="{max(1, g/48):.1f}"/></pattern>
  <radialGradient id="fade" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient>
  <mask id="gridmask"><rect width="{w}" height="{h}" fill="url(#fade)"/></mask>
</defs>'''

def dark_bg(w, h, gx=0.85, gy=0.1):
    return (defs(w, h, gx, gy) + f'<rect width="{w}" height="{h}" fill="#0a0807"/>'
            f'<rect width="{w}" height="{h}" fill="url(#grid)" mask="url(#gridmask)"/>'
            f'<rect width="{w}" height="{h}" fill="url(#glow)"/><rect width="{w}" height="{h}" fill="url(#glow2)"/>')

def render(name, w, h, body):
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">{body}</svg>'
    p = f'{OUT}/{name}'
    os.makedirs(os.path.dirname(p), exist_ok=True)
    open(p.replace('.png', '.svg'), 'w').write(svg)
    subprocess.run(['rsvg-convert', '-w', str(w), '-h', str(h), p.replace('.png', '.svg'), '-o', p], check=True)
    os.remove(p.replace('.png', '.svg'))

SERVICES = 'AI Agents  ·  Generative AI  ·  AI Automation  ·  WhatsApp Business API  ·  Cloud & DevOps'
TAG1, TAG2 = 'Engineering Intelligence.', 'Delivering Outcomes.'

def cover(name, w, h, box, mark_box, scale):
    """box = (x, y, width, height) safe area for text; mark_box = (x, y, height)."""
    x, y, bw, bh = box
    s = dark_bg(w, h)
    m, _, _ = img('mark', mark_box[0], mark_box[1], h=mark_box[2], opacity=0.95)
    s += m
    ww = min(bw * 0.42, 560 * scale)
    wm, _, wh = img('wordmark-white-text', x, y, w=ww)
    hs = 46 * scale
    cy = y + wh + hs * 1.55
    s += wm + text(x, cy, TAG1, hs, '#fff', HEAD) + text(x + 0, cy + hs * 1.12, TAG2, hs, '#f8a13a', HEAD)
    s += text(x, cy + hs * 2.05, SERVICES, 17 * scale, '#a8a29e', BODY)
    s += f'<rect x="{x}" y="{cy + hs*2.55:.0f}" width="{70*scale:.0f}" height="{5*scale:.0f}" rx="{2.5*scale:.0f}" fill="url(#bar)"/>'
    s += text(x + 86 * scale, cy + hs * 2.55 + 5 * scale, 'invigosol.com', 17 * scale, '#fff', SEMI)
    render(name, w, h, s)

# --- Covers / banners -------------------------------------------------------
# LinkedIn company cover: 1128x191, exported at 2x. Logo overlaps lower-left on mobile; keep text right of it.
def linkedin():
    w, h = 2256, 382
    s = dark_bg(w, h, 0.9, 0.0)
    m, _, _ = img('mark', 1990, 40, h=300)
    wm, _, wh = img('wordmark-white-text', 560, 70, w=420)
    s += m + wm
    s += text(1040, 150, TAG1, 66, '#fff', HEAD) + text(1040, 228, TAG2, 66, '#f8a13a', HEAD)
    s += text(1040, 292, 'AI Agents · Generative AI · AI Automation · WhatsApp Business API', 27, '#a8a29e')
    s += f'<rect x="560" y="300" width="110" height="7" rx="3.5" fill="url(#bar)"/>' + text(690, 310, 'invigosol.com', 27, '#fff', SEMI)
    render('covers/linkedin-cover-1128x191@2x.png', w, h, s)

# X / Twitter header 1500x500. Profile photo overlaps lower-left; top/bottom ~60px may crop.
def xheader():
    w, h = 1500, 500
    cover('covers/x-header-1500x500.png', w, h, (430, 120, 1000, 300), (1150, 70, 360), 1.0)

# Facebook cover 1640x624. Mobile crops ~205px each side; keep content in the centre 1230.
def facebook():
    w, h = 1640, 624
    s = dark_bg(w, h, 0.8, 0.1)
    m, _, _ = img('mark', 1170, 120, h=380, opacity=0.95)
    wm, _, wh = img('wordmark-white-text', 300, 150, w=440)
    s += m + wm
    s += text(300, 150 + wh + 82, TAG1, 54, '#fff', HEAD) + text(300, 150 + wh + 146, TAG2, 54, '#f8a13a', HEAD)
    s += text(300, 150 + wh + 200, 'AI Agents · Generative AI · AI Automation · WhatsApp Business API', 21, '#a8a29e')
    s += f'<rect x="300" y="{150+wh+228}" width="80" height="6" rx="3" fill="url(#bar)"/>' + text(398, 150 + wh + 236, 'invigosol.com', 21, '#fff', SEMI)
    render('covers/facebook-cover-1640x624.png', w, h, s)

# YouTube banner 2560x1440. Safe area for all devices: centre 1546x423 (507..2053, 508..931).
def youtube():
    w, h = 2560, 1440
    s = dark_bg(w, h, 0.75, 0.3)
    m, _, _ = img('mark', 1690, 515, h=410)
    wm, _, wh = img('wordmark-white-text', 560, 528, w=380)
    s += m + wm
    y = 528 + wh
    s += text(560, y + 72, TAG1, 56, '#fff', HEAD) + text(560, y + 136, TAG2, 56, '#f8a13a', HEAD)
    s += text(560, y + 188, 'AI Agents · Generative AI · AI Automation · WhatsApp Business API', 26, '#a8a29e')
    s += f'<rect x="560" y="{y+216}" width="90" height="7" rx="3.5" fill="url(#bar)"/>' + text(670, y + 226, 'invigosol.com', 26, '#fff', SEMI)
    render('covers/youtube-banner-2560x1440.png', w, h, s)

# GitHub org / repo social preview 1280x640.
def github():
    cover('covers/github-social-preview-1280x640.png', 1280, 640, (90, 150, 900, 400), (930, 150, 330), 1.0)

# --- Profile pictures (circle-safe) -----------------------------------------
def avatars():
    w = 1080
    m, mw, mh = img('mark', 0, 0, h=620)
    # recentre
    def centred(name, hgt, opacity=1):
        iw, ih = A[name][1]
        ww = hgt * iw / ih
        return img(name, (w - ww) / 2 + 20, (w - hgt) / 2, h=hgt, opacity=opacity)[0]
    render('profile/avatar-mark-white-bg-1080.png', w, w, f'<rect width="{w}" height="{w}" fill="#ffffff"/>' + centred('mark', 640))
    render('profile/avatar-mark-dark-bg-1080.png', w, w, dark_bg(w, w, 0.8, 0.15) + centred('mark', 640))
    render('profile/avatar-white-mark-orange-bg-1080.png', w, w, defs(w, w) + f'<rect width="{w}" height="{w}" fill="url(#brand)"/>' + centred('mark-white', 640))
    # stacked logo, for platforms that show a square logo (LinkedIn company logo, Facebook page)
    st = lambda name, bg: render(f'profile/avatar-stacked-{bg}-1080.png', w, w,
        (f'<rect width="{w}" height="{w}" fill="#ffffff"/>' if bg == 'light' else dark_bg(w, w, 0.8, 0.15)) +
        img(name, (w - 640 * A[name][1][0] / A[name][1][1]) / 2, 220, h=640)[0])
    st('stacked-dark-text', 'light'); st('stacked-white-text', 'dark')

# --- Logos --------------------------------------------------------------------
def logos():
    # Horizontal lockup: mark + wordmark, transparent, for light and dark backgrounds.
    for variant, word in [('on-light', 'wordmark-dark-text'), ('on-dark', 'wordmark-white-text')]:
        H = 400; mh = 360
        m, mw, _ = img('mark', 20, 20, h=mh)
        ww = 0.95 * (1600 - mw - 100)
        wm, ww, wh = img(word, mw + 80, (H - (ww * A[word][1][1] / A[word][1][0])) / 2, w=ww)
        W = int(mw + 80 + ww + 30)
        render(f'logos/invigosol-horizontal-{variant}.png', W, H, m + wm)
    for variant, name in [('on-light', 'stacked-dark-text'), ('on-dark', 'stacked-white-text')]:
        iw, ih = A[name][1]; H = 1200; W = int(H * iw / ih)
        render(f'logos/invigosol-stacked-{variant}.png', W, H, img(name, 0, 0, w=W, h=H)[0])
    iw, ih = A['mark'][1]
    render('logos/invigosol-mark.png', 1000, 1000, img('mark', (1000 - 900 * iw / ih) / 2, 50, h=900)[0])
    render('logos/invigosol-mark-white.png', 1000, 1000, img('mark-white', (1000 - 900 * iw / ih) / 2, 50, h=900)[0])

# --- Intro posts (Instagram / LinkedIn / Facebook), 1080x1350 -------------------
def posts():
    w, h = 1080, 1350
    # 1. Brand intro
    s = dark_bg(w, h, 0.9, 0.05)
    s += img('mark', 640, 90, h=380, opacity=0.95)[0]
    s += img('wordmark-white-text', 90, 120, w=360)[0]
    lines = ['AI that does', 'real work in', 'your business.']
    for i, l in enumerate(lines):
        s += text(90, 640 + i * 108, l, 96, '#f8a13a' if i == 2 else '#fff', HEAD)
    s += text(90, 1000, 'We design, build and run AI agents, LLM apps,', 34, '#d6d3d1')
    s += text(90, 1048, 'WhatsApp Business integrations and the cloud', 34, '#d6d3d1')
    s += text(90, 1096, 'platforms underneath them.', 34, '#d6d3d1')
    s += f'<rect x="90" y="1200" width="90" height="7" rx="3.5" fill="url(#bar)"/>' + text(200, 1210, 'invigosol.com', 30, '#fff', SEMI)
    render('posts/post-01-intro-1080x1350.png', w, h, s)

    # 2. Services
    svc = ['AI Agent Development', 'Generative AI & LLM Apps', 'AI Process Automation', 'WhatsApp Business API',
           'SaaS & Product Engineering', 'DevOps, Cloud & MLOps', 'Architecture & AI Readiness', 'Managed IT & Security']
    s = dark_bg(w, h, 1.0, 0.0)
    s += img('wordmark-white-text', 90, 90, w=280)[0]
    s += text(90, 330, 'What we build', 84, '#fff', HEAD)
    for i, t in enumerate(svc):
        y = 450 + i * 92
        s += f'<rect x="90" y="{y}" width="900" height="74" rx="18" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.08"/>'
        s += text(124, y + 49, f'0{i+1}', 30, '#f5780f', HEAD) + text(200, y + 49, t, 32, '#fff', SEMI)
    s += f'<rect x="90" y="1230" width="90" height="7" rx="3.5" fill="url(#bar)"/>' + text(200, 1240, 'invigosol.com/services', 30, '#fff', SEMI)
    render('posts/post-02-services-1080x1350.png', w, h, s)

    # 3. BizAgent
    bz = base64.b64encode(open(BZ, 'rb').read()).decode()
    s = dark_bg(w, h, 0.9, 0.1)
    s += text(90, 150, 'OUR PRODUCT', 26, '#f5780f', SEMI, extra='letter-spacing="6"')
    s += f'<image x="90" y="190" width="420" height="100" preserveAspectRatio="xMinYMid meet" href="data:image/svg+xml;base64,{bz}"/>'
    for i, l in enumerate(['See how your team', 'handles every', 'customer.']):
        s += text(90, 450 + i * 96, l, 84, '#f8a13a' if i == 2 else '#fff', HEAD)
    items = ['Customers your team has not answered', 'Slow replies and open complaints', 'Hot leads, scored 0 to 100',
             'Daily report on your own WhatsApp']
    for i, t in enumerate(items):
        y = 780 + i * 74
        s += f'<circle cx="108" cy="{y-11}" r="12" fill="url(#bar)"/>' + text(140, y, t, 34, '#e7e5e4')
    s += text(90, 1150, 'WhatsApp + email · Urdu, Roman Urdu, English, Arabic', 28, '#a8a29e')
    s += f'<rect x="90" y="1220" width="90" height="7" rx="3.5" fill="url(#bar)"/>' + text(200, 1230, 'bizagent.pk  ·  A product of InvigoSol', 30, '#fff', SEMI)
    render('posts/post-03-bizagent-1080x1350.png', w, h, s)

linkedin(); xheader(); facebook(); youtube(); github(); avatars(); posts()  # logos come from the SVG masters (scripts/vectorize.py)
print('done')
