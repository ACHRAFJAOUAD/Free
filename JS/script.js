// preloader
let preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.classList.add("active");
});

// styling side bar
const toogle_open = document.getElementById("toggle-open");
const toogle_close = document.getElementById("toggle-close");
const sideBar = document.querySelector(".sidebar");
const sideOverlay = document.querySelector(".side-overlay");
const links = document.querySelector(".menu-links");
const all = document.querySelector("#blur");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

toogle_open.addEventListener("click", () => {
  sideBar.classList.toggle("open-sidebar");
  all.classList.add("actif");
  body.classList.remove("stopScrolling");
  overlay.classList.add("active");
});

toogle_close.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  all.classList.remove("actif");
  overlay.classList.remove("active");
});
links.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  all.classList.remove("actif");
  overlay.classList.remove("active");
});

sideOverlay.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  all.classList.remove("actif");
  overlay.classList.remove("active");
});

window.onscroll = () => {
  sideBar.classList.remove("open-sidebar");
  all.classList.remove("actif");
  overlay.classList.remove("active");
};
