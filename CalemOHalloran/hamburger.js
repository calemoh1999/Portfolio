"use strict";
// HAMBURGER MENU //
const hamburgermenu = document.querySelector('.hamburgermenu');
const navMenu = document.querySelector('.nav-menu');

hamburgermenu.addEventListener('click', () => {
  hamburgermenu.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle("menu-open"); // Use document.body to refer to the body element
})
document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
        hamburgermenu.classList.remove("active");
        navMenu.classList.remove("active");
}));