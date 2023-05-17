import refs from './refs';
var throttle = require('lodash.throttle');

refs.toTopButton.addEventListener('click', topFunction);

// When the user scrolls down 350px from the top of the document, show the button
window.onscroll = throttle(scrollFunction, 300);

function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    refs.toTopButton.style.opacity = '1';
    refs.toTopButton.style.visibility = 'visible';
  } else {
    refs.toTopButton.style.opacity = '0';
    refs.toTopButton.style.visibility = 'hidden';
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
