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

// Array of projects
const projects = [
  {
    id: '1',
    name: 'Tonic',
    profile: 'canopy',
    categories: ['Back End Dev', '2015'],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "./Assets/Page 2 image.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    sourceLink: "#",
    btnId: 'see-project-2',
    contentDirection: '',
  },

  {
    id: '2',
    name: "Multi-Post Stories",
    description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    image: "./Assets/Page 3 image.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    sourceLink: "#",
    btnId: 'see-project-3',
    contentDirection: 'reverseGrid',
  },

  {
    id: '3',
    name: "Facebook 360",
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    image: "./Assets/Page 4 image.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    sourceLink: "#",
    btnId: 'see-project-4',
    contentDirection: '',
  },

  {
    id: '4',
    name: "Uber Navigation",
    description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    image: "./Assets/Page 5 image.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    sourceLink: "#",
    btnId: 'see-project-5',
    contentDirection: 'reverseGrid',
  },
];

// Select the element with the id 'Port'
const workSection = document.getElementById('#Port');

//Function to create a list of programming languages
function createProgrammingLanguages(technologies) {
  return technologies.map((technology) => `<li>${technology}</li>`).join('');
}

//loop through the projects array and create  project cards
projects.forEach((project, index) => {
  const projectCard = `
  <section class="card">
  <section class="page-2">
    <div class="wrapper">
      <div class="img">
        <img src="./Assets/Page 2 image.png" alt="page 2 image">
      </div>
      <div class="text" id="textp-2">
        <h3>Tonic</h3>
        <ul>
          <h5>CANOPY</h5>
          <li>Back End Dev</li>
          <li>2015</li>
        </ul>
        <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
      </div>
      <ul class="btn">
        <li><a href="#" class="html">HTML</a></li>
        <li><a href="#" class="css">CSS</a></li>
        <li><a href="#" class="javascript">JavaScript</a></li>
      </ul>
      <div class="container">
        <a href="#" class="see-project-btn" id="see-project-2">See project</a>
      </div>
    </div>
  </section>
    `;
  workSection.innerHTML += projectCard;
});

// Append additional Html code to the workSection
workSection.innerHTML += `
<section id="popup-page">
    <div class="wrapper">
      <a href="#" class="close" id="close"><i class="fa-solid fa-xmark"></i></a>
      <div id="text-L">
        <h3>Tonic</h3>
        <ul>
          <h5>CANOPY</h5>
          <li>Back End Dev</li>
          <li>2015</li>
        </ul>
      </div>
      <div id="img">
        <img src="./Assets/Page 2 image.png" alt="page 2 image">
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essent</p>
      <ul id="btn">
        <li><a href="#" class="html">HTML</a></li>
        <li><a href="#" class="css">CSS</a></li>
        <li><a href="#" class="javascript">JavaScript</a></li>
      </ul>
      <footer id="go-live" class="container">
        <a href="#" id="inner-live"><span>See live</span><img src="./Assets/Icon point.png" alt="vector icon"></a>
        <a href="#" id="inner-source"><span>See source</span><img src="./Assets/Vectorgithub.png" alt="github icon"></a>
      </footer>
    </div>
  </section>
`;

// Select required elements
const popupContainer = document.getElementById('popup-page');
const overlay = document.querySelector('.overlay');
const closeBtn = document.getElementById('close');
const title = document.querySelector('#text-L h3');
const snap = document.querySelector('#img img');
const description = document.querySelector('#text-L p');
const openBtns = document.querySelectorAll('.see-project-btn');
const seeLive = document.querySelector('#go-live .inner-live');
const seesource = document.querySelector('#go-live .inner-source');
const technologies = document.querySelector('.programming-languages ul');


