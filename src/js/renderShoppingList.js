import { shoppingListMarkup } from './shoppingListMarkup';

const SHOP_LIST_KEY = 'shopping-list';

// Це посилання закинути в refs
const shoppingListWrapper = document.querySelector('.shopping-list-wrap');
const paginationContainer = document.getElementById('pagination');

export async function renderShoppingList(pageNumber) {
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
    shoppingListWrapper.style.backgroundImage = `url("./images/shopping-list/background-image")`;
    console.log('Немає нічого');
    paginationContainer.classList.add('visually-hidden');
    console.log(paginationContainer);
  } else if (getItemsFromLocaleStorage.length <= 3) {
    paginationContainer.classList.add('visually-hidden');
    console.log(paginationContainer);
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
}
