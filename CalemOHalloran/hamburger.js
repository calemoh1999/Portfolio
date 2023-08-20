// Get the mobile menu button and the mobile menu itself
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

// Add a click event listener to the mobile menu button
mobileMenuButton.addEventListener('click', () => {
    // Toggle the 'active' class on the mobile menu
    mobileMenu.classList.toggle('active');
});
