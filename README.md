# Jyothi Ravilla — Portfolio Site

A single-page portfolio built with plain HTML, CSS, and JavaScript (no
build step, no dependencies).

## Files
- `index.html` — all page content
- `style.css` — burgundy/copper design system, layout, animations
- `script.js` — mobile nav toggle, scroll-reveal, animated timeline trace
- `assets/Jyothi_Ravilla_Resume_Amazon_SDE.pdf` — résumé, linked from the
  "Download résumé" button
- `assets/jyothi-headshot.jpg` — hero portrait
- `ceramics/` — your ceramics & printmaking site, linked from the
  "Checkout my ceramics work" section. Self-contained; untouched except for
  a small "← Back to portfolio" link added to `ceramics/index.html`.

## Run it locally
Just open `index.html` in a browser — no server required. For live-reload
while editing, you can also run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy it (free options)
Since you've already used **Cloudflare Pages** for your last portfolio, the
fastest path:
1. Go to the Cloudflare dashboard → Workers & Pages → Create → Pages →
   "Upload assets".
2. Drag this whole folder in. Done — you'll get a live URL in under a
   minute, and can attach your custom domain the same way you did before.

Other equally easy options: **Netlify Drop** (netlify.com/drop — drag and
drop this folder) or **GitHub Pages** (push this folder to a repo, enable
Pages in repo settings).

## Customize
- Swap the résumé PDF in `assets/` and update the link in `index.html` if
  you revise it.
- Colors live as CSS variables at the top of `style.css` under `:root` —
  change `--wine`, `--copper`, `--paper` to retint the whole site.
- Add real project screenshots by replacing a `.project-visual` SVG block
  with an `<img>` tag.
