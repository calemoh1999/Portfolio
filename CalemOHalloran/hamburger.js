// Get the menu toggle checkbox
const menuToggle = document.getElementById('menu-toggle');
const optionsMenu = document.querySelector('.options');

// Add an event listener to toggle the menu on checkbox change
menuToggle.addEventListener('change', () => {
  optionsMenu.classList.toggle('show-options', menuToggle.checked);
});
