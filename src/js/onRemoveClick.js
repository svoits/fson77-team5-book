import { renderShoppingList } from './renderShoppingList';
import { pagination } from './tui-pagination';

// Refs
const SHOP_LIST_KEY = 'shopping-list';
// Закинути в refs
const shoppingListWrapper = document.querySelector('.shopping-list-wrap');
renderShoppingList(1);
// Закинути в shopping-list.js або в файл з функцією, яка буде до нього підключатись
shoppingListWrapper.addEventListener('click', onRemoveClick);

export function onRemoveClick(evt) {
  const dataString = localStorage.getItem(SHOP_LIST_KEY);
  const removeBtn = evt.target.closest('.wrap-about-book-remove');
  const selectedPaginationBtn = document.querySelector('.tui-is-selected');
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

  if (deletePaginationPageByWrapper.children.length > 1) {
    renderShoppingList(selectedPaginationBtn.innerText);
  } else {
    location.reload();
  }
}
