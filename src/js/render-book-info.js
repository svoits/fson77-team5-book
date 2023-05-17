import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { markupCardBookInfo } from './markup-books-info';
import getBookAPI from './getBookAPI';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { onClickBtn } from './onClickBtn';
import { searchBook } from './addToLocalStorage';
import refs from './refs';

refs.contentWrapper.addEventListener('click', onBookInfoClick);

async function onBookInfoClick(evt) {
  try {
    evt.preventDefault();
    const cardLink = evt.target.closest('.js-card-link');
    if (!cardLink) {
      return;
    }

    const bookId = cardLink.dataset.id;
    const data = await getBookAPI('bookId', bookId);
    const infoMarkup = markupCardBookInfo(data, searchBook(data));

    const instance = basicLightbox.create(infoMarkup, {
      onShow: () => {
        disableBodyScroll(document.body);
        window.addEventListener('keydown', onEscButtonClick);
      },
      onClose: () => {
        enableBodyScroll(document.body);
        window.removeEventListener('keydown', onEscButtonClick);
      },
    });

    instance.show();
    const modalInfoClose = document.querySelector('[data-modal-close]');
    modalInfoClose.addEventListener('click', onBookInfoModalCloses);

    function onBookInfoModalCloses() {
      instance.close();
    }

    const actionBtn = document.querySelector('.btn-book-info');

    actionBtn.addEventListener('click', onClickBtn);

    function onEscButtonClick(evt) {
      if (evt.code === 'Escape') {
        instance.close();
      }
    }
  } catch (error) {
    console.log(error);
  }
}
