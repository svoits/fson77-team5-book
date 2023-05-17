import { renderShoppingList } from './renderShoppingList';
import { pagination, options } from './tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const imageForEmpty = document.querySelector('.js-back');
const textForEmpty = document.querySelector('.js-text');
import refs from './refs';
const SHOP_LIST_KEY = 'shopping-list';

renderShoppingList(1);

refs.shoppingListWrapper.addEventListener('click', onRemoveClick);

export function onRemoveClick(evt) {
  const dataString = localStorage.getItem(SHOP_LIST_KEY);
  const removeBtn = evt.target.closest('.wrap-about-book-remove');
  const deletePaginationPageByWrapper = document.querySelector(
    '.shopping-list-wrap'
  );

  if (!removeBtn) {
    return;
  }
  const books = JSON.parse(dataString);
  const newBooks = books.filter(
    ({ author, title }) =>
      author !== removeBtn.dataset.author && title !== removeBtn.dataset.title
  );
  const updatedDataString = JSON.stringify(newBooks);

  localStorage.setItem(SHOP_LIST_KEY, updatedDataString);

  options.totalItems -= 1;
  if (deletePaginationPageByWrapper.children.length > 1) {
    let pageCurrent = pagination.getCurrentPage();
    pagination.reset(options.totalItems);
    pagination.movePageTo(pageCurrent);
  } else {
    let pageCurrent = pagination.getCurrentPage() - 1;
    pagination.reset(options.totalItems);
    pagination.movePageTo(pageCurrent);
  }
  if (!options.totalItems) {
    imageForEmpty.classList.remove('visually-hidden');
    textForEmpty.classList.remove('visually-hidden');
  }
}
