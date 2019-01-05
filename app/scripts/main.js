/* Thomas Naylor */
(function() {

  /* start #add class to navbar on scroll */
  const navbar = document.getElementById('j-navbar');
  const heroSection = document.getElementById('j-hero-section');

  // get the height of the hero div on specific device
  let heroHeight = heroSection.clientHeight;

  // function to check height and set css class
  function headerAnimation(scroll) {
    let scrollY = window.scrollY

    if(scrollY >= heroHeight) {
      navbar.classList.add('navbar-transition');
    } else {
      navbar.classList.remove('navbar-transition');
    }
  }
  headerAnimation();

  // when scroll is greater than hero div add css rules to change header
  window.addEventListener('scroll', headerAnimation, false);
  /* end */

  /* start #set height of navbar back to dynamic on mobile toggle */
  const navbarToggle = document.querySelector('.navbar-toggler');
  const regMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  function dynamicHeight() {
    if(regMobile) {
      navbar.style.height = 'auto';
    }
  }

  navbarToggle.addEventListener('click', dynamicHeight, false);
  /* end */
})();

/* game-over ;) */
