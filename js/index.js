// Variabili UI
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// Carica Tutti Gli Eventi
allEventListners();

// Funzioni Degli Eventi
function allEventListners() {
  // Togli Icona
  navToggler.addEventListener('click', togglerClick);
  // Navbar Links
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// Funzione Togli Clock
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// Funzione Navbar Links
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
