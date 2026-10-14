# InvigoSol brand kit: social media

Generated from the master logo `public/images/brand/logo.jpg`. Colours: deep orange `#F35B18` to amber `#F8B10B`
on ink `#0A0807`. Headline type: Avenir Next Heavy Italic.

## Covers and banners (`covers/`)

| File | Platform | Upload notes |
|---|---|---|
| `linkedin-cover-1128x191@2x.png` | LinkedIn company page cover | Exported at 2x (2256×382) for sharpness. The left side is kept clear for the page logo. |
| `facebook-cover-1640x624.png` | Facebook page cover | Mobile crops ~205px from each side; text stays inside. |
| `x-header-1500x500.png` | X (Twitter) header | The profile photo overlaps the lower left; text starts to the right of it. |
| `youtube-banner-2560x1440.png` | YouTube channel banner | All content sits inside the 1546×423 safe area. |
| `github-social-preview-1280x640.png` | GitHub org/repo social preview | Also usable as a link-share image. |

## Profile pictures (`profile/`, 1080×1080, circle-safe)

| File | Use |
|---|---|
| `avatar-mark-white-bg-1080.png` | Default for LinkedIn, Facebook, Instagram, X, GitHub |
| `avatar-mark-dark-bg-1080.png` | Dark alternative |
| `avatar-white-mark-orange-bg-1080.png` | Bold option; stands out in feeds |
| `avatar-stacked-light-1080.png` / `avatar-stacked-dark-1080.png` | Full logo with wordmark, for square logo slots |

## Logos (`logos/`)

**Vector masters in `logos/svg/`.** Use these wherever possible: they stay sharp at any size, from print to billboards.
They were redrawn from the original JPG: the swoosh stripes are rebuilt geometrically, the ball is two true circles,
and the lettering is traced and smoothed.

| File | Use |
|---|---|
| `invigosol-logo-horizontal.svg` / `-white.svg` | Main lockup (mark + wordmark): website header, email signature, decks |
| `invigosol-logo-stacked.svg` / `-white.svg` | Stacked original layout |
| `invigosol-wordmark.svg` / `-white.svg` | Wordmark only |
| `invigosol-icon.svg` | Logo icon (mark) in full colour |
| `invigosol-icon-white.svg` | White silhouette for orange or photo backgrounds |
| `invigosol-icon-square-white/-dark/-orange.svg` | Square app-icon tiles |

**HD PNGs in `logos/png/`.** Use these for tools that don't accept SVG:
- 4000px for the logos, wordmarks and icons;
- 2048px for the square tiles.
"-white" files are for dark backgrounds.

## Launch posts (`posts/`, 1080×1350, for Instagram, LinkedIn and Facebook)

1. `post-01-intro`: "AI that does real work in your business."
2. `post-02-services`: the 8 services
3. `post-03-bizagent`: BizAgent, "A product of InvigoSol"

## Regenerating

Requires Python 3 with OpenCV, NumPy and Pillow, plus `rsvg-convert` (librsvg).

```bash
# 1. Vectorise the master JPG into SVG masters
python3 brand-kit/scripts/vectorize.py public/images/brand/logo.jpg /tmp/paths.json
python3 brand-kit/scripts/compose_svg.py /tmp/paths.json brand-kit/logos/svg

# 2. Render HD inputs, then the covers, avatars and posts
mkdir -p /tmp/kit && V=brand-kit/logos/svg
rsvg-convert -h 2400 $V/invigosol-icon.svg -o /tmp/kit/mark.png
rsvg-convert -h 2400 $V/invigosol-icon-white.svg -o /tmp/kit/mark-white.png
rsvg-convert -w 3000 $V/invigosol-wordmark.svg -o /tmp/kit/wordmark-dark-text.png
rsvg-convert -w 3000 $V/invigosol-wordmark-white.svg -o /tmp/kit/wordmark-white-text.png
rsvg-convert -w 2400 $V/invigosol-logo-stacked.svg -o /tmp/kit/stacked-dark-text.png
rsvg-convert -w 2400 $V/invigosol-logo-stacked-white.svg -o /tmp/kit/stacked-white-text.png
python3 brand-kit/scripts/build.py /tmp/kit brand-kit ../bizagent/web/public/brand/bizagent-logo-dark.svg
```
