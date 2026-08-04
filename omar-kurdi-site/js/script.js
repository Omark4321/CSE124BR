/* ===============================================================
   HOW TO ADD YOUR OWN PHOTOS AND VIDEOS
   ---------------------------------------------------------------
   1. Drop image files into  media/photos/
      Drop video files into  media/videos/
   2. Add the filename (just the filename, not the folder) to the
      matching list below.
   3. Commit and push — GitHub Pages will pick it up automatically.
=================================================================== */

const photoFiles = [
  // "beach-day.jpg",
  // "graduation.png",
];

const videoFiles = [
  // "campus-tour.mp4",
];

/* ===============================================================
   Rendering — you shouldn't need to touch anything below this line
=================================================================== */

function renderPhotos() {
  const gallery = document.getElementById("photo-gallery");
  const count = document.getElementById("photo-count");
  count.textContent = photoFiles.length ? `${photoFiles.length}` : "";

  if (photoFiles.length === 0) {
    gallery.innerHTML = `
      <div class="empty-state">
        No photos yet. Add files to <code>media/photos/</code> and list
        their filenames in <code>js/script.js</code> to see them here.
      </div>`;
    return;
  }

  gallery.innerHTML = "";
  photoFiles.forEach((filename) => {
    const btn = document.createElement("button");
    btn.className = "photo-thumb";
    btn.setAttribute("aria-label", `Open ${filename}`);

    const img = document.createElement("img");
    img.src = `media/photos/${filename}`;
    img.alt = filename;
    img.loading = "lazy";

    btn.appendChild(img);
    btn.addEventListener("click", () => openLightbox(img.src, filename));
    gallery.appendChild(btn);
  });
}

function renderVideos() {
  const gallery = document.getElementById("video-gallery");
  const count = document.getElementById("video-count");
  count.textContent = videoFiles.length ? `${videoFiles.length}` : "";

  if (videoFiles.length === 0) {
    gallery.innerHTML = `
      <div class="empty-state">
        No videos yet. Add files to <code>media/videos/</code> and list
        their filenames in <code>js/script.js</code> to see them here.
      </div>`;
    return;
  }

  gallery.innerHTML = "";
  videoFiles.forEach((filename) => {
    const card = document.createElement("div");
    card.className = "video-card";

    const video = document.createElement("video");
    video.src = `media/videos/${filename}`;
    video.controls = true;
    video.preload = "metadata";

    card.appendChild(video);
    gallery.appendChild(card);
  });
}

/* Lightbox */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.setAttribute("data-open", "true");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.setAttribute("data-open", "false");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

renderPhotos();
renderVideos();
