/* ---------------------------------------------
   Tokens
--------------------------------------------- */
:root {
  --bg: #f4f5f2;
  --ink: #171d1a;
  --muted: #5b655f;
  --line: #d6d9d3;
  --accent: #2f7d6b;      /* deep teal — signature color */
  --accent-warm: #d98c3d; /* used sparingly for hover/highlight */
  --surface: #ffffff;

  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;

  --max-width: 960px;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation: none !important; transition: none !important; }
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.5;
}

a {
  color: var(--accent);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}

a:hover { color: var(--accent-warm); }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

/* ---------------------------------------------
   Hero
--------------------------------------------- */
.hero {
  padding: 6rem 1.5rem 4rem;
  display: flex;
  justify-content: center;
}

.hero__frame {
  max-width: var(--max-width);
  width: 100%;
}

.eyebrow {
  font-family: var(--font-body);
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 0.75rem;
  font-weight: 600;
}

.hero__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  line-height: 1.02;
  margin: 0 0 1.5rem;
  letter-spacing: -0.02em;
}

.hero__bio {
  font-size: 1.1rem;
  color: var(--muted);
  max-width: 42em;
  margin: 0 0 2rem;
}

.hero__bio a { color: var(--ink); font-weight: 600; }

.hero__nav {
  display: flex;
  gap: 1.75rem;
}

.hero__nav a {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  color: var(--ink);
}

.hero__nav a:hover { color: var(--accent); }

/* ---------------------------------------------
   Sprocket divider — the signature element:
   a filmstrip perforation rule between sections
--------------------------------------------- */
.sprocket-divider {
  height: 1px;
  max-width: var(--max-width);
  margin: 0 auto;
  background-image: radial-gradient(circle, var(--line) 1.5px, transparent 1.6px);
  background-size: 22px 100%;
  background-repeat: repeat-x;
  background-position: left center;
}

/* ---------------------------------------------
   Gallery sections
--------------------------------------------- */
.gallery-section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3.5rem 1.5rem;
}

.section-head {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.section-head h2 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  margin: 0;
}

.section-count {
  font-size: 0.85rem;
  color: var(--muted);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.9rem;
}

/* Empty state — shown when the media arrays in js/script.js are empty */
.empty-state {
  grid-column: 1 / -1;
  border: 1px dashed var(--line);
  border-radius: 10px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  color: var(--muted);
  font-size: 0.95rem;
}

.empty-state code {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
  font-size: 0.85rem;
}

/* Photo thumbnails */
.photo-thumb {
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--line);
  cursor: pointer;
  padding: 0;
}

.photo-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;
}

.photo-thumb:hover img { transform: scale(1.05); }

/* Video cards */
.video-card {
  border-radius: 8px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--line);
}

.video-card video {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  background: #000;
}

/* ---------------------------------------------
   Lightbox
--------------------------------------------- */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(23, 29, 26, 0.92);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 100;
}

.lightbox[data-open="true"] { display: flex; }

.lightbox__img {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 6px;
}

.lightbox__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.2rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
}

.lightbox__close:hover { color: var(--accent-warm); }

/* ---------------------------------------------
   Footer
--------------------------------------------- */
.site-footer {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  color: var(--muted);
  font-size: 0.85rem;
}
