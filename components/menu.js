const details = [
  {
    id: 1,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    titlemobile: 'Tonic',
    titledesktop: 'Tonic',
    live: '',
    source: '',
    imagemobile: "./Assets/Page-2-image.png",
    imagedesktop: "./Assets/Snapshoot-Portfolio-new.png",
  },
  {
    id: 2,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    titlemobile: 'Multi-post stories',
    titledesktop: 'Multi-post stories',
    live: '',
    source: '',
    imagemobile: "./Assets/Page-3-image.jpg",
    imagedesktop: "./Assets/Snapshoot-Portfolio-3.png",
  },
  {
    id: 3,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    titlemobile: 'Tonic',
    titledesktop: 'Facebook360',

    live: '',
    source: '',
    imagemobile: "./Assets/Page-4-image.jpg",
    imagedesktop: "./Assets/Snapshoot-Portfolio-4.png",
  },

  {
    id: 4,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    titlemobile: 'Multi-post stories',
    titledesktop: 'Uber Navigation',

    live: '',
    source: '',
    imagemobile: "./Assets/Page-5-image.jpg",
    imagedesktop: "./Assets/Snapshoot-Portfolio-5.jpg",
  },

];

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

/// POPUP CODE

const popdetail = (e, pop) => {
  const play = `<div class="content">
      <div class="top">
      <div class="cancel">X</div>
        <h2 class="desktop">${e.titledesktop}</h2>
        <h2 class="mobile">${e.titlemobile}</h2>
        <ul class="text">
          <li class="dark desktop">Uber</li>
          <h5 class="dark mobile">CANOPY</h5>
          <li class="desktop">full Stack Dev</li>
          <li class="mobile">Back End Dev</li>
          <li class="desktop">2018</li>
          <li class="mobile">2015</li>
        </ul>
      </div>
      <div class="image">
        <img src="${e.imagedesktop}" class="desktop"/>
        <img src="${e.imagemobile}" class="mobile"/>
      </div>
      <div class="bottom">
        <div class="words">
          <p class="desktop">
            ${e.text}
          </p>

          <p class="mobile">
            ${e.text}
          </p>
        </div>
         
        <div class="other">
          <ul class="stack">
            <li>html</li>
            <li>javascript</li>
            <li class="desktop">ruby </li>
            <li>css</li>
            <li class="desktop">github</li>
            <li class="desktop">bootstrap</li>
          </ul>
  
          <div class="button">
            <a href="${e.live}" class="btn">
              see live
              <img src="assets/icon-point.png"/>
            </a>
            <a href="${e.source}" class="btn">
              see source
              <img src="assets/Vectorgithub.png"/>
            </a>
          </div>
        </div>
        
        

       
        
      </div>`;

  pop.innerHTML = play;
};

const btn = document.querySelectorAll('.container');

btn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const parent = btn.parentElement;
    const pop = parent.querySelector('.pop');
    console.log(pop)
    details.forEach((e) => {
      if (index + 1 === e.id) {
        popdetail(e, pop);
        const content = document.querySelector('.content');
        const canc = document.querySelector('.cancel');
        canc.addEventListener('click', () => {
          pop.removeChild(content);
        });
      }
    });
  });
});

// Select the form and error message element
const form = document.querySelector('#contact-me-form');
const emailError = document.querySelector('small.error');

// Function to display an error message
function showError() {
  emailError.textContent = 'Kindly use only lowercase for the email';
  emailError.classList.add('active');
}

// Function to hide the error message
function hideError() {
  emailError.textContent = '';
  emailError.classList.remove('active');
}

// Function to validate email format
function validateEmail(email) {
  return email === email.toLowerCase();
}

// Add submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value;
  if (!validateEmail(email)) {
    showError();
  } else {
    hideError();
    form.submit();
  }
});
