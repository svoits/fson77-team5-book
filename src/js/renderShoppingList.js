import { shoppingListMarkup } from './shoppingListMarkup';
import refs from './refs';

const SHOP_LIST_KEY = 'shopping-list';

export async function renderShoppingList(pageNumber) {
  refs.backdropLoader.classList.add('is-active');

  let getItemsFromLocaleStorage;
  let perPage;
  if (window.innerWidth >= 768) {
    perPage = 3;
  } else {
    perPage = 4;
  }
  refs.shoppingListWrapper.innerHTML = '';

  getItemsFromLocaleStorage =
    (await JSON.parse(localStorage.getItem(SHOP_LIST_KEY))) ?? [];

  if (!getItemsFromLocaleStorage.length) {
    refs.paginationContainer.classList.add('visually-hidden');
    refs.imageForEmpty.classList.remove('visually-hidden');
    refs.textForEmpty.classList.remove('visually-hidden');
    refs.contentWrap.style.height = 'auto';
  } else if (getItemsFromLocaleStorage.length <= 3) {
    refs.paginationContainer.classList.add('visually-hidden');

    refs.shoppingListWrapper.insertAdjacentHTML(
      'beforeend',
      shoppingListMarkup(
        getItemsFromLocaleStorage.slice(
          perPage * pageNumber - perPage,
          perPage * pageNumber
        )
      )
    );
  } else {
    refs.shoppingListWrapper.insertAdjacentHTML(
      'beforeend',
      shoppingListMarkup(
        getItemsFromLocaleStorage.slice(
          perPage * pageNumber - perPage,
          perPage * pageNumber
        )
      )
    );
  }
  refs.backdropLoader.classList.remove('is-active');
}
