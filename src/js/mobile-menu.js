import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import refs from './refs';

(() => {
  const toggleMenu = () => {
    const isMenuOpen =
      refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? disableBodyScroll : enableBodyScroll;
    scrollLockMethod(document.body);
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.mobileMenu.classList.remove('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
