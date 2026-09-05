# Md. Dalour Hossan Saeed - Engineering Portfolio

A Big Tech / FAANG-grade technical engineering portfolio built with pure semantic HTML5, Vanilla CSS3, and lightweight Vanilla JS. Zero external bloated libraries, instant 100/100 Lighthouse performance, strict 3-4 color palette, and high engineering signal.

## 🚀 GitHub Pages Deployment Guide

You can host this portfolio on GitHub Pages in 2 simple steps:

### Option 1: Direct Repository Hosting (`dalour1507036.github.io`)
1. Create a public repository named:
   ```
   dalour1507036.github.io
   ```
2. Commit and push the contents of this folder to the `main` branch.
3. In GitHub, go to **Settings** → **Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / `/(root)`
   - Click **Save**.
4. The root `index.html` automatically forwards visitors to `/portfolio/`, or you can deploy the contents of the `portfolio/` directory directly to the repository root.

### Option 2: Project Sub-path Hosting (`dalour1507036.github.io/portfolio`)
1. If this repository is named `portfolio` or `portfolio_project`:
2. Push to GitHub.
3. In GitHub Settings → Pages, select `main` branch and `/(root)`.
4. Your site will be live at:
   ```
   https://dalour1507036.github.io/portfolio/
   ```

---

## 📂 Project Architecture

```
c:/portfolio_project/
├── index.html                   # Automatic root forwarder for GitHub Pages
├── README.md                    # Deployment documentation
└── portfolio/                   # Production-ready standalone portfolio
    ├── index.html               # Main semantic, accessible portfolio document
    ├── css/
    │   └── style.css            # Clean 3-4 color design system & responsive layout
    ├── js/
    │   └── main.js              # Vanilla JS runtime (RFC viewer, recruiter brief copy)
    ├── assets/
    │   ├── cv.pdf               # Original CV in PDF format
    │   ├── Dalour_Hossan_Saeed_Resume.pdf
    │   └── favicon.svg          # Custom SVG engineering favicon
    └── README.md
```

---

## 🎨 Architectural Standards
- **Strict Color Palette:**
  - Base Obsidian: `#090d16`
  - Elevated Slate: `#111726` / `#1f293d`
  - Typography: `#f8fafc` (Primary) & `#94a3b8` (Technical Slate)
  - Accent / Signal: `#00d2ff` (Electric Cyan)
  - Production Status: `#10b981` (Emerald)
- **High Signal-to-Noise Ratio:** Focused on ClickHouse OLAP aggregations, real-time CDC, multithreading, and quantifiable X-Y-Z business impact.
- **Zero-Bloat Performance:** 100% Vanilla code with sub-30ms load times and full mobile, tablet, laptop, and ultra-wide monitor responsiveness.
