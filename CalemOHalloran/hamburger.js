"use strict";
// HAMBURGER MENU //
const hamburgermenu = document.querySelector('.hamburgermenu');
const navMenu = document.querySelector('.nav-menu');

hamburgermenu.addEventListener('click', () => {
  hamburgermenu.classList.toggle('active');
  navMenu.classList.toggle('active');
  bodyElement.classList.toggle("menu-open"); // Add this line
})
document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
        hamburgermenu.classList.remove("active");
        navMenu.classList.remove("active");
}));