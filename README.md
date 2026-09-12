# Quant Portfolio Website

A static personal site (plain HTML/CSS, no build step) for showcasing
quantitative research / quant development projects.

## Structure

```
index.html            Home page — hero, about, skills, projects, experience, contact
projects/template.html Copy this for each individual project write-up
css/style.css          All styling (single stylesheet, CSS custom properties for theme)
assets/resume/         Put resume.pdf here (referenced from the hero "Download Résumé" button)
```

Anything with a dashed amber outline and a "TODO" tag in the corner is
placeholder content — replace it before publishing. Search the HTML files
for `class="todo"` to find every spot.

## Filling in content

1. Replace the hero headline/lede and contact links in `index.html`.
2. Fill in Skills, Experience/Education with real details.
3. For each project:
   - Add a card in `index.html`'s `#projects` section.
   - Duplicate `projects/template.html` (e.g. `projects/vol-surface-model.html`),
     fill it in, and link it from the card's "Write-up →" link.
   - Link the "Code →" button to the project's own GitHub repo.
4. Drop your résumé PDF at `assets/resume/resume.pdf`.

## Publish to GitHub Pages

```bash
cd "Github Website"
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

Repo name must be exactly `<your-username>.github.io` for GitHub Pages to
serve it automatically at `https://<your-username>.github.io/` — no
"Enable Pages" step needed for that specific repo name (GitHub turns it on
by default). If you'd rather use a project repo instead, name it anything,
then enable Pages in Settings → Pages → Deploy from branch → `main` / `root`;
the site will be served at `https://<your-username>.github.io/<repo-name>/`.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
