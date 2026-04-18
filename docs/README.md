# Companion site — Beyond Single-Turn

This folder is a static, multi-page companion website for the CMU survey
**Beyond Single-Turn: A Survey on Multi-Turn Interactions with Large Language Models**.

It is plain HTML / CSS / JS (no build step) and is designed to be served as-is
by GitHub Pages.

## Deploying on GitHub Pages

1. Commit and push this `docs/` folder to the default branch of the repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set the branch to your default branch (e.g. `main`) and the folder to **`/docs`**.
5. Save. GitHub will publish the site at
   `https://<your-username>.github.io/<repo-name>/` within a minute.

## Local preview

The benchmark data is bundled inline as a JavaScript file (`assets/data/benchmarks.data.js`),
so the site works by just opening `index.html` from the filesystem. For a production-style
preview you can still serve it over HTTP:

```bash
cd docs
python -m http.server 8080
# then open http://localhost:8080
```

## File map

| File / directory | What it is |
| --- | --- |
| `index.html` | Landing page (hero, abstract, contributions, preview of other pages) |
| `tasks-if.html` | Instruction Following — General, Math, Coding |
| `tasks-ce.html` | Conversational Engagement — Overview, Healthcare, Education, Role-Play, Jailbreak |
| `benchmarks.html` | Searchable / filterable / sortable benchmark explorer |
| `methods.html` | Three improvement pillars — model-centric, external integration, agent-based |
| `challenges.html` | Five open-challenge areas |
| `about.html` | Authors, scope, review methodology, BibTeX |
| `assets/css/styles.css` | Full design system (academic-prestige palette, typography) |
| `assets/js/partials.js` | Injects shared header / footer |
| `assets/js/main.js` | Shared behavior (nav toggle, BibTeX copy, smooth anchors) |
| `assets/js/benchmarks.js` | Powers the searchable benchmark table |
| `assets/data/benchmarks.data.js` | Benchmark rows as an inline JS bundle (used directly by the page) |
| `assets/data/benchmarks.json` | Mirror of the benchmark data in JSON form |
| `main.pdf` | The survey PDF, referenced from the hero — copy it in before deploying |

## Customizing

* **Colors, typography, spacing** — edit `assets/css/styles.css`
  (`:root` at the top defines all tokens).
* **Navigation links** — edit `assets/js/partials.js`
  (the `headerHTML` string).
* **Benchmark rows** — edit `assets/data/benchmarks.json` and regenerate
  `assets/data/benchmarks.data.js` (same content wrapped as `window.__BENCHMARKS__ = …;`).

## License

The survey is covered by the repository-level LICENSE. The companion site
uses Google Fonts (Inter, Source Serif 4, JetBrains Mono) via the public CDN.
