import { btnUp } from "./scrollUp";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

btnUp.el.addEventListener('click', scrollToTop);