# Omar Kurdi — Photo & Video Site

A very basic personal site for storing photos and videos, built to run on
GitHub Pages.

## What's in here

```
index.html         the whole page
css/style.css       styling
js/script.js        the two lists you edit to add media, plus gallery logic
media/photos/       put your image files here
media/videos/       put your video files here
```

## Adding your own photos and videos

1. Copy your image files into `media/photos/` and your video files into
   `media/videos/`.
2. Open `js/script.js` and add each filename to the matching list near the
   top of the file, e.g.:

   ```js
   const photoFiles = [
     "beach-day.jpg",
     "graduation.png",
   ];

   const videoFiles = [
     "campus-tour.mp4",
   ];
   ```
3. Save, commit, and push — the page picks them up automatically.

Keep videos reasonably small (GitHub has a 100MB per-file limit and repos
work best under 1GB total) — if you have large or many videos, consider
linking out to YouTube/Google Drive instead of hosting the file directly.

## Publishing on GitHub Pages

1. Create a new repository on GitHub (e.g. `omar-kurdi-site`).
2. Push these files to the repository's `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/omark4321/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`.
5. Save. Your site will be live in a minute or two at:

   `https://omark4321.github.io/YOUR-REPO-NAME/`

## Editing the bio

The name and summary live at the top of `index.html`, inside the
`<header class="hero">` section — edit the text directly there.
