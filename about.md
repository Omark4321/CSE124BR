/* ---------------------------------------------
   Teaching Portfolio — "lesson log" theme
   Each lesson renders like a commit: a hash-style
   id, a message-style title, and a diffstat of the
   resources (video / doc / project) attached to it.
--------------------------------------------- */

:root {
  --bg: #201d1a;
  --bg-raised: #2a2521;
  --text: #ede7de;
  --text-dim: #a89d8f;
  --border: #3a3530;
  --accent-video: #5fb86d;   /* commit-add green */
  --accent-doc: #e0a458;     /* amber */
  --accent-project: #6ea8d8; /* blue */
  --radius: 6px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  line-height: 1.6;
}

.mono {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}

a { color: var(--accent-video); text-decoration: none; }
a:hover, a:focus-visible { text-decoration: underline; }

.wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 4rem;
}

/* header / terminal-prompt intro */
header.site-header {
  border-bottom: 1px solid var(--border);
  margin-bottom: 2.5rem;
  padding-bottom: 1.25rem;
}

.prompt {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  color: var(--text-dim);
  font-size: 0.85rem;
  margin: 0 0 0.5rem;
}
.prompt::before { content: "$ "; color: var(--accent-video); }

.site-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
}

.site-nav a {
  color: var(--text-dim);
  margin-right: 1.25rem;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.9rem;
}
.site-nav a:hover { color: var(--text); }

/* lesson / commit card */
.lesson-card {
  background: var(--bg-raised);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.1rem 1.25rem;
  margin-bottom: 1rem;
}

.lesson-meta {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-bottom: 0.4rem;
}

.lesson-hash { color: var(--accent-doc); }

.lesson-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 0.4rem;
}
.lesson-title a { color: var(--text); }

.lesson-desc {
  color: var(--text-dim);
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
}

/* diffstat-style resource list */
.diffstat { list-style: none; margin: 0; padding: 0; }
.diffstat li {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.diffstat .tag {
  font-weight: 700;
  width: 1.2rem;
}
.diffstat .video .tag { color: var(--accent-video); }
.diffstat .doc .tag { color: var(--accent-doc); }
.diffstat .project .tag { color: var(--accent-project); }

footer.site-footer {
  margin-top: 3rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);
  color: var(--text-dim);
  font-size: 0.8rem;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}

@media (max-width: 480px) {
  .wrap { padding: 1.5rem 1rem 3rem; }
  .site-title { font-size: 1.35rem; }
}
