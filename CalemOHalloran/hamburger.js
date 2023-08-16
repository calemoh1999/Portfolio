const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
