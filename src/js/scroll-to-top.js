var throttle = require('lodash.throttle');

const myButton = document.querySelector('.scroll-up');

// When the user scrolls down 20px from the top of the document, show the button
(window.onscroll = throttle(function () {
  scrollFunction();
})),
  500;

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    myButton.style.opacity = '1';
    myButton.style.visibility = 'visible';
  } else {
    myButton.style.opacity = '0';
    myButton.style.visibility = 'hidden';
  }
}
//   opacity: 1;
//   visibility: visible;

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

myButton.addEventListener('click', topFunction);
