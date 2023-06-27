// Select the elements with the respective class names
const menuIcon = document.querySelector('.menu-icon');
const buttons = document.querySelector('.buttons');
const closeIcon = document.querySelector('.close-icon');
const navItems = document.querySelectorAll('.nav-item');

// Add an event listener to the menuIcon
function toggleMenu() {
  buttons.classList.toggle('active'); // Toggle the 'active' class on the buttons element
  menuIcon.classList.toggle('hide'); // Toggle the 'hide' class on the menuIcon element
  closeIcon.classList.toggle('show'); // Toggle the 'show' class on the closeIcon element
}

menuIcon.addEventListener('click', toggleMenu); // Add an event listener to the menuIcon

// Add an event listener to the closeIcon
closeIcon.addEventListener('click', toggleMenu); // Add an event listener to the closeIcon

// Add an event listener to the navItems
navItems.forEach((navItem) => {
  navItem.addEventListener('click', toggleMenu); // Add an event listener to each navItem
  buttons.classList.remove('active'); // Remove the 'active' class from the buttons element
  menuIcon.classList.add('show'); // Remove the 'hide' class from the menuIcon element
  menuIcon.classList.remove('hide'); // Add the 'show' class to the menuIcon element
  closeIcon.classList.remove('show'); // Remove the 'show' class from the closeIcon element
});
