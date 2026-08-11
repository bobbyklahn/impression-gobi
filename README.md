# Impression Gobi — estate site

English marketing site for **昌吉市印象戈壁葡萄酒庄** (Impression Gobi Winery), built in the same structure and craft as the local `wildhorsesite` reference.

## Run locally

```bash
cd impression-gobi
python3 -m http.server 8765
# open http://127.0.0.1:8765
```

## Pages

| Page | Role |
|------|------|
| `index.html` | Home — manifesto, pillars, wine list teaser, terroir stats |
| `story.html` | Short real timeline (2014 → today), people |
| `wines.html` | CMS blend, Marselan, organic cuvées |
| `terroir.html` | Beilu climate, what it tastes like |
| `contact.html` | Trade / visit form (front-end demo) |

## Design notes

- **Pattern:** cloned from Wild Horse (nav, hero, bento, wine rows, pull quotes, footer).
- **No Pixi/GSAP hero stack** — still posters only, quieter.
- **Copy:** short, specific, no “silk road magic” brochure tone. Awards only when sourced.

## Images

| Source | What |
|--------|------|
| **Real — Decanter China** | `images/wines/bottle-cms.png` — Impression Gobi 2018 CMS bottle (gecko label) |
| **Real — winechina / estate WeChat** | `images/source/press-01…06` — IWSC Asia judges visit 2024 (grounds, barrel room, library, tasting hall, brand wall) |
| **Grok Imagine** | Hero vineyard, soil detail, hand harvest, tasting table, marquee landscape |
| **Avoided** | Generic blank bottles / pure Wild Horse Ningxia props where real Gobi material existed |

Press photos carry the estate watermark (公众号 · 新疆印象戈壁葡萄酒庄). Fine for training mock-ups; for public launch get clean files from the winery.

## Before real launch

1. Prefer unwatermarked estate files from 印象戈壁 when available.
2. Add remaining bottle SKUs + technical sheets (ABV, blend %, production).
3. Wire contact form to email / CRM.
4. Confirm organic cert wording with the winery for AU/FSANZ.
5. Optional Chinese pages under `cn/` (same as Wild Horse).
