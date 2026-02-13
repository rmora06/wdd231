const artists = [
  { name: "Luna Rivera", genre: "Pop", image: "https://picsum.photos/400/300?1", bio: "Emerging pop sensation blending Latin rhythms with modern beats." },
  { name: "Kai Storm", genre: "Hip-Hop", image: "https://picsum.photos/400/300?2", bio: "Urban storyteller with powerful lyrical flow." },
  { name: "Nova Blue", genre: "R&B", image: "https://picsum.photos/400/300?3", bio: "Smooth vocals and soulful melodies." },
  { name: "Echo Lane", genre: "Indie Rock", image: "https://picsum.photos/400/300?4", bio: "Alternative rock band with cinematic sound." },
  { name: "DJ Solaris", genre: "Electronic", image: "https://picsum.photos/400/300?5", bio: "High-energy electronic producer and DJ." },
  { name: "Maya Soul", genre: "Jazz", image: "https://picsum.photos/400/300?6", bio: "Modern jazz vocalist redefining classics." },
  { name: "Rico Blaze", genre: "Reggaeton", image: "https://picsum.photos/400/300?7", bio: "Latin urban artist with global influence." },
  { name: "Aurora Sky", genre: "Pop", image: "https://picsum.photos/400/300?8", bio: "Dreamy pop sound with emotional depth." },
  { name: "Zane Carter", genre: "Country", image: "https://picsum.photos/400/300?9", bio: "Country singer blending tradition and modern sound." },
  { name: "Neon Pulse", genre: "Electronic", image: "https://picsum.photos/400/300?10", bio: "Synth-driven dance music project." },
  { name: "Isla Moon", genre: "Indie Pop", image: "https://picsum.photos/400/300?11", bio: "Indie artist with captivating vocals." },
  { name: "Ryder Knox", genre: "Rock", image: "https://picsum.photos/400/300?12", bio: "High-energy rock performer." },
  { name: "Velvet Rose", genre: "Soul", image: "https://picsum.photos/400/300?13", bio: "Soulful singer with timeless voice." },
  { name: "Atlas Wave", genre: "Alternative", image: "https://picsum.photos/400/300?14", bio: "Experimental alternative band." },
  { name: "Sonic Drift", genre: "Lo-fi", image: "https://picsum.photos/400/300?15", bio: "Relaxing lo-fi beats producer." }
];

const container = document.querySelector(".artists-grid");
const modal = document.querySelector("#artist-modal");
const modalBody = document.querySelector("#modal-body");
const closeButton = document.querySelector(".close-button");

if (container) {
  artists.forEach((artist) => {
  const card = document.createElement("div");
  card.classList.add("artist-card");

  card.innerHTML = `
    <img src="${artist.image}" alt="${artist.name}" width="400" height="300" loading="lazy">
    <h3>${artist.name}</h3>
    <p>${artist.genre}</p>
    <button>View Details</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    modalBody.innerHTML = `
      <h2>${artist.name}</h2>
      <p><strong>Genre:</strong> ${artist.genre}</p>
      <p>${artist.bio}</p>
    `;
    modal.classList.add("open");

    localStorage.setItem("lastViewedArtist", artist.name);
  });

  container.appendChild(card);
  });
}


closeButton.addEventListener("click", () => {
  modal.classList.remove("open");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("open");
  }
});

if (closeButton) {
  closeButton.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}

if (modal) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("open");
    }
  });
}
