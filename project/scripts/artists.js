export function displayArtists(artists) {
  const container = document.querySelector(".artists-grid");
  const modal = document.querySelector("#artist-modal");
  const modalBody = document.querySelector("#modal-body");
  const closeButton = document.querySelector(".close-button");

  if (!container) return;

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

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }

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
}
