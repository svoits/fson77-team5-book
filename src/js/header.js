import './mobile-menu';

const authorizedBtn = document.querySelector('.authorized-btn');
const logOutBtn = document.querySelector('.log-out-btn');
const headerHomeBtn = document.querySelector('.header-home-btn');
const headerShoppingBtn = document.querySelector('.header-shopping-btn');
const mobileHomeBtn = document.querySelector('.mobile-home-btn');
const mobileShoppingBtn = document.querySelector('.mobile-shopping-btn');
const userIconArrow = document.querySelector('.user-icon-arrow');

function checkCurrentPage() {
  if (document.URL.includes('shopping-list.html')) {
    mobileHomeBtn.classList.remove('current');
    headerHomeBtn.classList.remove('current');
    headerShoppingBtn.classList.add('current');
    mobileShoppingBtn.classList.add('current');
  } else {
    headerShoppingBtn.classList.remove('current');
    mobileShoppingBtn.classList.remove('current');
    mobileHomeBtn.classList.add('current');
    headerHomeBtn.classList.add('current');
  }
}
checkCurrentPage();

authorizedBtn.addEventListener('click', onAuthorizedBtnClick);

function onAuthorizedBtnClick(e) {
  userIconArrow.classList.toggle('is-active');
  logOutBtn.classList.toggle('is-active');
}
