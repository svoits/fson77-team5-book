import { markupCardBookInfo } from './markup-books-info';
import getBookAPI from './getBookAPI';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const contentWrapper = document.querySelector('.js-content-wrapper');
const modalInfoClose = document.querySelector('[data-modal-close]');
const cardModalBookInfo = document.querySelector('[data-info-close]');

contentWrapper.addEventListener('click', onBookInfoClick);
// modalInfoClose.addEventListener('click', onBookInfoModalCloses);

async function onBookInfoClick(evt) {
  try {
    evt.preventDefault();
    const cardLink = evt.target.closest('.js-card-link');
    if (!cardLink) {
      return;
    }

    const bookId = cardLink.dataset.id;
    const data = await getBookAPI('bookId', bookId);
    const infoMarkup = markupCardBookInfo(data);

    const instance = basicLightbox.create(infoMarkup, {
      onShow: () => window.addEventListener('keydown', onEscButtonClick),
      onClose: () => window.removeEventListener('keydown', onEscButtonClick),
    });

    instance.show();

    function onEscButtonClick(evt) {
      if (evt.code === 'Escape') {
        instance.close();
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function onBookInfoModalCloses(evt) {
  console.log(evt.target);
  if(evt.currentTarget){
    cardModalBookInfo.classList.add('is-hidden');
  }
}
// let addRemoveBookButton = document.querySelector('#addRemoveBookButton');

// addRemoveBookButton.addEventListener('click', (e) => {
//   if (addRemoveBookButton.innerHTML === 'ADD TO SHOPPING LIST') {
//     addRemoveBookButton.innerHTML = 'REMOVE FROM SHOPPING LIST';
//     document.querySelector('#addRemoveBookButton').innerHTML = 'Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
//   } else {
//     addRemoveBookButton.innerHTML = 'ADD TO SHOPPING LIST';
//     document.querySelector('#addRemoveBookButton').innerHTML = '';
//   }
// });
