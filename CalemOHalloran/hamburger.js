const hamburgerButton = document.querySelector('.hamburger-button');
const options = document.querySelector('.options');

hamburgerButton.addEventListener('click', () => {
    options.classList.toggle('active');
});
