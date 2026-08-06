# Omar Kurdi's Website

A very simple personal site with a video section and a photo section, built to run on GitHub Pages.

## How to add content

Open `content.js`:

- **Videos**: paste any YouTube URL into the `videos` array.
- **Photos**: drop image files into the `photos/` folder, then add their filenames (e.g. `"photos/beach.jpg"`) to the `photos` array.

No build step, no dependencies — just edit `content.js` and refresh the page.

## Preview locally

Just open `index.html` in a browser. Or, from this folder, run a tiny local server:

```
python3 -m http.server
```

then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new repo on GitHub (e.g. `omar-kurdi-site`).
2. Push this folder's contents to it:
   ```
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub, go to the repo's **Settings > Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
