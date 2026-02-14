import { displayArtists } from "./artists.js";

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#primary-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });
}

async function loadArtists() {
  try {
    const response = await fetch("data/artists.json");

    if (!response.ok) {
      throw new Error("Failed to fetch artists data");
    }

    const artists = await response.json();
    displayArtists(artists);

  } catch (error) {
    console.error("Error loading artists:", error);
  }
}

loadArtists();

