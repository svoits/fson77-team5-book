import './mobile-menu';
import refs from './refs';

function checkCurrentPage() {
  if (document.URL.includes('shopping-list.html')) {
    refs.mobileHomeBtn.classList.remove('current');
    refs.headerHomeBtn.classList.remove('current');
    refs.headerShoppingBtn.classList.add('current');
    refs.mobileShoppingBtn.classList.add('current');
  } else {
    refs.headerShoppingBtn.classList.remove('current');
    refs.mobileShoppingBtn.classList.remove('current');
    refs.mobileHomeBtn.classList.add('current');
    refs.headerHomeBtn.classList.add('current');
  }
}
checkCurrentPage();

refs.authorizedBtn.addEventListener('click', onAuthorizedBtnClick);

function onAuthorizedBtnClick(e) {
  refs.userIconArrow.classList.toggle('is-active');
  refs.logOutBtn.classList.toggle('is-active');
}
