document.getElementById("year").textContent = new Date().getFullYear();

function getYouTubeId(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : null;
}

const videoGrid = document.getElementById("video-grid");
videos.forEach((url) => {
  const id = getYouTubeId(url);
  if (!id) return;
  const wrapper = document.createElement("div");
  wrapper.className = "video-wrapper";
  wrapper.innerHTML = `<iframe
      src="https://www.youtube.com/embed/${id}"
      title="YouTube video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;
  videoGrid.appendChild(wrapper);
});

const photoGrid = document.getElementById("photo-grid");
photos.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.loading = "lazy";
  photoGrid.appendChild(img);
});

if (videos.length === 0) {
  videoGrid.innerHTML = "<p class='empty'>No videos yet.</p>";
}
if (photos.length === 0) {
  photoGrid.innerHTML = "<p class='empty'>No photos yet.</p>";
}
