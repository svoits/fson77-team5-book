import {
  addToLocalStorage,
  removeFromLocaleStorage,
} from './addToLocalStorage';
import { parseDiv } from './parseDiv';
import { markupCardBookInfo } from './markup-books-info';

// notification.classList.remove('is-hidden');

export function onClickBtn(evt) {
  const notification = document.querySelector('.book-infoBtn-explanation');
  if (evt.target.classList.contains('book_add__to_list')) {
    addToLocalStorage(parseDiv(evt.target.closest('div')));
    evt.target.classList.add('book_remove__from_list');
    evt.target.classList.remove('book_add__to_list');
    evt.target.innerText = 'REMOVE FROM THE SHOPPING LIST';
    notification.classList.remove('visually-hidden');
  } else if (evt.target.classList.contains('book_remove__from_list')) {
    removeFromLocaleStorage(parseDiv(evt.target.closest('div')));
    evt.target.classList.add('book_add__to_list');
    evt.target.classList.remove('book_remove__from_list');
    evt.target.innerText = 'ADD TO THE SHOPPING LIST';
    notification.classList.add('visually-hidden');
  }
}
