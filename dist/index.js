const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navHome = document.querySelector('#nav-home');
const navAbout = document.querySelector('#nav-about');
const navProject = document.querySelector('#nav-project');
const navContact = document.querySelector('#nav-contact');
const navMedsos = document.querySelector('#nav-medsos');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
  
});


navHome.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});

navAbout.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});

navProject.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});

navContact.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});

navMedsos.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});





