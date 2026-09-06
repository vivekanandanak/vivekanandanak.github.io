document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
const menu = document.querySelector(".menu");
const navLinks = header.querySelectorAll("nav a");

function setMenu(open) {
  header.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menu.textContent = open ? "Close" : "Menu";
}

menu.addEventListener("click", () => {
  setMenu(menu.getAttribute("aria-expanded") !== "true");
});

navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) setMenu(false);
});
