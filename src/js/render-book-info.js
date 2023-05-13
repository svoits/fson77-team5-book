import { markupCardBookInfo } from './markup-books-info';
import getBookAPI from './getBookAPI';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const contentWrapper = document.querySelector('.js-content-wrapper');
const SHOP_LIST_KEY = 'shopping-list';

contentWrapper.addEventListener('click', onBookInfoClick);

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

    const actionBtn = document.querySelector('.btn-book-info');
    actionBtn.addEventListener('click', onClickBtn);

    // console.log(actionBtn);

    function onEscButtonClick(evt) {
      if (evt.code === 'Escape') {
        instance.close();
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function onClickBtn(evt) {
  if (evt.target.classList.contains('book_add__to_list')) {
    addToLocalStorage(parseDiv(evt.target.closest('div')));
  }
  console.log(evt);
}

function addToLocalStorage(obj) {
  const getLocalStorage = localStorage.getItem(SHOP_LIST_KEY);
  const parseLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : [];
  console.log(parseLocalStorage);
  const isLocaleStorage = parseLocalStorage.some(
    ({ title, author }) => title === obj.title && author === obj.author
  );
  if (!isLocaleStorage) {
    parseLocalStorage.push(obj);
  }

  console.log(parseLocalStorage);
  localStorage.setItem(SHOP_LIST_KEY, JSON.stringify(parseLocalStorage));
}

function parseDiv(div) {
  // console.log(...div.children);
  const dataToLocalStorage = {};

  [...div.children].forEach(i => {
    switch (i.tagName) {
      case 'H2':
        dataToLocalStorage.list_name = i.textContent;
        console.log(i.textContent);
        break;
      case 'IMG':
        dataToLocalStorage.book_image = i.src;
        dataToLocalStorage.title = i.alt;
        console.log(i.alt);
        break;
      case 'P':
        if (i.classList.contains('book_info_author')) {
          dataToLocalStorage.author = i.textContent;

          console.log(i.textContent);
        } else if (i.classList.contains('book_info_description')) {
          const descr = i.textContent
            ? i.textContent
            : `Опис можете подивитись на сайті)`;
          dataToLocalStorage.description = descr;
          console.log(i.textContent);
        }
        break;
      case 'DIV':
        const buyLinks = [...i.children].map(idx => idx.href);
        dataToLocalStorage.buy_links = buyLinks;
        console.log(buyLinks);
    }
  });
  // console.log(dataToLocalStorage);

  return dataToLocalStorage;
}

// let addRemoveBookButton = document.querySelector('#addRemoveBookButton');

// addRemoveBookButton.addEventListener('click', e => {
//   if (addRemoveBookButton.innerHTML === 'ADD TO SHOPPING LIST') {
//     addRemoveBookButton.innerHTML = 'REMOVE FROM SHOPPING LIST';
//     document.querySelector('#addRemoveBookButton').innerHTML =
//       'Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
//   } else {
//     addRemoveBookButton.innerHTML = 'ADD TO SHOPPING LIST';
//     document.querySelector('#addRemoveBookButton').innerHTML = '';
//   }
// });
