// Select the elements with the respective class names
const menuIcon = document.querySelector('.menu-icon');
const buttons = document.querySelector('.buttons');
const closeIcon = document.querySelector('.close-icon');
const navItem = document.querySelectorAll('.nav-item');

// Add an event listener to the menuIcon
function toggleMenu() {
  buttons.classList.toggle('active'); // Toggle the 'active' class on the menu element
  menuIcon.classList.toggle('hide'); // Toggle the 'hide' class on the openMenu element
  closeIcon.classList.toggle('show'); // Toggle the 'show' class on the closeMenu element
}

menuIcon.addEventListener('click', toggleMenu); // Add an event listener to the menuIcon

// Add an event listener to the closeIcon
closeIcon.addEventListener('click', toggleMenu); // Add an event listener to the closeIcon

// Add an event listener to the navItems
navItem.forEach((navItem) => {
  navItem.addEventListener('click', toggleMenu); // Add an event listener to the navItems
});

// Path: scroll.js
// Select the elements with the respective class names
const scroll = document.querySelector('.scroll');

// Add an event listener to the scroll
window.addEventListener('scroll', () => {
  scroll.classList.toggle('active', window.scrollY > 500); // Toggle the 'active' class on the scroll element
});
