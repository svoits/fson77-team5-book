var throttle = require('lodash.throttle');

const myButton = document.querySelector('.scroll-up__btn');
myButton.addEventListener('click', topFunction);

// When the user scrolls down 350px from the top of the document, show the button
window.onscroll = throttle(scrollFunction, 300);

function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    myButton.style.opacity = '1';
    myButton.style.visibility = 'visible';
  } else {
    myButton.style.opacity = '0';
    myButton.style.visibility = 'hidden';
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
