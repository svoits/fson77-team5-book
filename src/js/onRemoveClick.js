import { renderShoppingList } from './renderShoppingList';
import { pagination } from './tui-pagination';

// Refs
const SHOP_LIST_KEY = 'shopping-list';

// Закинути в refs
const shoppingListWrapper = document.querySelector('.shopping-list-wrap');
// pagination;

// Закинути в shopping-list.js або в файл з функцією, яка буде до нього підключатись
shoppingListWrapper.addEventListener('click', onRemoveClick);

export function onRemoveClick(evt) {
  const paginationContainer = document.getElementById('#pagination');
  // evt.preventDefault();
  const dataString = localStorage.getItem(SHOP_LIST_KEY);
  const removeBtn = evt.target.closest('.wrap-about-book-remove');

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
  const paginationElement = document.querySelector('.tui-page-btn');
  if (newBooks.length <= 3) {
    // paginationElement.classList.add('visually-hidden');
    console.log(paginationContainer);
  }

  location.reload();
  // pagination;
}
