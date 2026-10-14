import json, sys, os
d = json.load(open(sys.argv[1])); P = d['paths']; out = sys.argv[2]; os.makedirs(out, exist_ok=True)
mx0, my0, mx1, my1 = d['bbox']['mark']; wx0, wy0, wx1, wy1 = d['bbox']['word']
cx, cy, R = d['ball']
DEFS = f'''<defs>
<linearGradient id="ig-base" gradientUnits="userSpaceOnUse" x1="{mx0:.1f}" y1="{my1:.1f}" x2="{mx1:.1f}" y2="{my0+120:.1f}">
  <stop offset="0" stop-color="#F06416"/><stop offset="0.5" stop-color="#F6920F"/><stop offset="1" stop-color="#FAB60D"/></linearGradient>
<linearGradient id="ig-dark" gradientUnits="userSpaceOnUse" x1="{mx0:.1f}" y1="{my1:.1f}" x2="{mx1:.1f}" y2="{my0+120:.1f}">
  <stop offset="0" stop-color="#E2431A"/><stop offset="1" stop-color="#EF6414"/></linearGradient>
<linearGradient id="ig-fade" gradientUnits="userSpaceOnUse" x1="{mx0:.1f}" y1="0" x2="{mx0+430:.1f}" y2="0">
  <stop offset="0" stop-color="#E2431A"/><stop offset="0.55" stop-color="#EA5418"/><stop offset="1" stop-color="#F28A12" stop-opacity="0"/></linearGradient>
<radialGradient id="ig-ball" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#FBBF2A"/><stop offset="1" stop-color="#F5900F"/></radialGradient>
</defs>'''
MARK = (f'<circle cx="{cx:.2f}" cy="{cy:.2f}" r="{R:.2f}" fill="#E9531A"/>'
        f'<circle cx="{cx-4.5:.2f}" cy="{cy-2.5:.2f}" r="{R-5:.2f}" fill="url(#ig-ball)"/>'
        f'<path fill="url(#ig-base)" d="{P["upper"]}"/>'
        f'<path fill="url(#ig-fade)" d="{P["upper_top"]}"/>'
        f'<path fill="url(#ig-dark)" d="{P["upper_bot"]}"/>'
        f'<path fill="url(#ig-base)" fill-rule="evenodd" d="{P["sail"]}"/>'
        f'<path fill="url(#ig-dark)" d="{P["sail_dark"]}"/>')
def WORD(fill):
    return (f'<path fill="{fill}" fill-rule="evenodd" d="{P["word_black"]}"/>'
            f'<path fill="#EF8A06" fill-rule="evenodd" d="{P["word_orange"]}"/>')
def svg(name, vb, body, bg=None):
    x, y, w, h = vb
    rect = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{bg}"/>' if bg else ''
    open(f'{out}/{name}.svg', 'w').write(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x:.1f} {y:.1f} {w:.1f} {h:.1f}" width="{w:.0f}" height="{h:.0f}">'
        f'<title>InvigoSol</title>{DEFS}{rect}{body}</svg>')
pad = 8
svg('invigosol-icon', (mx0 - pad, my0 - pad, mx1 - mx0 + 2 * pad, my1 - my0 + 2 * pad), MARK)
# square app icon (mark centred, generous padding) on white / ink / orange
side = max(mx1 - mx0, my1 - my0) * 1.45
sx, sy = (mx0 + mx1) / 2 - side / 2 + 6, (my0 + my1) / 2 - side / 2
svg('invigosol-icon-square-white', (sx, sy, side, side), MARK, '#FFFFFF')
svg('invigosol-icon-square-dark', (sx, sy, side, side), MARK, '#0A0807')
x0, x1 = min(wx0, mx0) - pad, max(wx1, mx1) + pad
svg('invigosol-logo-stacked', (x0, my0 - pad, x1 - x0, wy1 - my0 + 2 * pad), MARK + WORD('#111111'))
svg('invigosol-logo-stacked-white', (x0, my0 - pad, x1 - x0, wy1 - my0 + 2 * pad), MARK + WORD('#FFFFFF'))
svg('invigosol-wordmark', (wx0 - pad, wy0 - pad, wx1 - wx0 + 2 * pad, wy1 - wy0 + 2 * pad), WORD('#111111'))
svg('invigosol-wordmark-white', (wx0 - pad, wy0 - pad, wx1 - wx0 + 2 * pad, wy1 - wy0 + 2 * pad), WORD('#FFFFFF'))
# horizontal lockup
wh = wy1 - wy0; mh = my1 - my0; s = wh * 1.3 / mh; mw = (mx1 - mx0) * s; gap = wh * 0.22
Ht = wh * 1.3 + 2 * pad; Wt = mw + gap + (wx1 - wx0) + 2 * pad
for name, fill in [('invigosol-logo-horizontal', '#111111'), ('invigosol-logo-horizontal-white', '#FFFFFF')]:
    body = (f'<g transform="translate({pad - mx0*s:.2f},{pad - my0*s:.2f}) scale({s:.5f})">{MARK}</g>'
            f'<g transform="translate({pad + mw + gap - wx0:.2f},{pad + (wh*1.3 - wh)/2 - wy0:.2f})">{WORD(fill)}</g>')
    svg(name, (0, 0, Wt, Ht), body)
import re
white = lambda body: re.sub(r'fill="(url\(#ig-[a-z]+\)|#[0-9A-Fa-f]{6})"', 'fill="#FFFFFF"', body)
svg('invigosol-icon-white', (mx0 - pad, my0 - pad, mx1 - mx0 + 2 * pad, my1 - my0 + 2 * pad), white(MARK))
svg('invigosol-icon-square-orange', (sx, sy, side, side), white(MARK), '#EF6C12')
print('ok')
