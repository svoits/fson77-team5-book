import { shoppingListMarkup } from './shoppingListMarkup';
const SHOP_LIST_KEY = 'shopping-list';

const shoppingListWrapper = document.querySelector('.shopping-list-wrap');
const paginationContainer = document.getElementById('pagination');
const backdropLoader = document.querySelector('.loader-backdrop');
const imageForEmpty = document.querySelector('.js-back');
const textForEmpty = document.querySelector('.js-text');
const contentWrap = document.querySelector('.content-wrap');

export async function renderShoppingList(pageNumber) {
  backdropLoader.classList.add('is-active');

  let getItemsFromLocaleStorage;
  let perPage;
  if (window.innerWidth >= 768) {
    perPage = 3;
  } else {
    perPage = 4;
  }
  shoppingListWrapper.innerHTML = '';

  getItemsFromLocaleStorage =
    (await JSON.parse(localStorage.getItem(SHOP_LIST_KEY))) ?? [];

  if (!getItemsFromLocaleStorage.length) {
    paginationContainer.classList.add('visually-hidden');
    imageForEmpty.classList.remove('visually-hidden');
    textForEmpty.classList.remove('visually-hidden');
    contentWrap.style.height = 'auto';
  } else if (getItemsFromLocaleStorage.length <= 3) {
    paginationContainer.classList.add('visually-hidden');

    shoppingListWrapper.insertAdjacentHTML(
      'beforeend',
      shoppingListMarkup(
        getItemsFromLocaleStorage.slice(
          perPage * pageNumber - perPage,
          perPage * pageNumber
        )
      )
    );
  } else {
    shoppingListWrapper.insertAdjacentHTML(
      'beforeend',
      shoppingListMarkup(
        getItemsFromLocaleStorage.slice(
          perPage * pageNumber - perPage,
          perPage * pageNumber
        )
      )
    );
  }
  backdropLoader.classList.remove('is-active');
}
