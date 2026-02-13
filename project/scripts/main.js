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
