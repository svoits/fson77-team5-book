import amazon from '../images/trading-platforms/amazon.png';
import amazon_2x from '../images/trading-platforms/amazon@2x.png';
import apple from '../images/trading-platforms/apple-books.png';
import apple_2x from '../images/trading-platforms/apple-books@2x.png';
import bookshop from '../images/trading-platforms/bookshop.png';
import bookshop_2x from '../images/trading-platforms/bookshop@2x.png';
import logos from '../images/symbol-defs.svg';

export function markupCardBookInfo(data) {
  const classDescription = flag ? '' : 'visually-hidden';
  const buttonText = flag
    ? 'REMOVE FROM SHOPPING LIST'
    : 'ADD TO SHOPPING LIST';
  const buttonClass = flag ? 'book_remove__from_list' : 'book_add__to_list';
  const { book_image, author, description, title, buy_links } = data;
  return `
    <div class="book_info_card">
    <button class="modal-info-close" type="button" data-modal-close>
    <svg class="info-modal-close-icon" width="24" height="24">
    <use href="${logos}#close"></use>
    </svg>
    </button>
    <div class="info_img-author_container">
        <div class="book-info-img-wrap"><img src="${book_image}" alt="${title}" class="book_info_img"></div>

        <div class="info_about_book">
            <h2 class="book_info_name">${title}</h2>
            <p class="book_info_author">${author}</p>
            <p class="book_info_description">${description}</p>
            <div class="info-logo-container">
            <a href="${buy_links[0].url}" class="book-store-link" target="_blank">
                <img srcset="${amazon} 1x,
                ${amazon_2x} 2x"
              src="${amazon}"
                alt="Amazon" class="amazon-logo store-info-book" width="62" height="19">
            </a>
            <a href="${buy_links[1].url}" class="book-store-link" target="_blank">
                <img srcset="${apple} 1x,
                ${apple_2x} 2x"
              src="${apple}" 
                alt="Apple Books" class="store-info-book" width="33" height="32">
            </a>
            <a href="${buy_links[4].url}" class="book-store-link" target="_blank">
                <img srcset="${bookshop} 1x,
                ${bookshop_2x} 2x"
              src="${bookshop}"  
                alt="Bookshop" class="store-info-book" width="38" height="36">
            </a>
        </div>
        <button class="btn-book-info ${buttonClass}" type="button" id="addRemoveBookButton">${buttonText}</button>
        <p class="book-infoBtn-explanation ${classDescription}">
        Сongratulations! You have added the book to the shopping list. 
        To delete, press the button “Remove from the shopping list”.
        </p>
    </div>`;
}

// REMOVE FROM SHOPPING LIST
// ADD TO SHOPPING LIST
// book_remove_from_list
// book_add__to_list
