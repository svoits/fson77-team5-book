export function markupCardBookInfo(data, flag) {
  const classDescription = flag ? '' : 'visually-hidden';
  const buttonText = flag
    ? 'REMOVE FROM SHOPPING LIST'
    : 'ADD TO SHOPPING LIST';
  const buttonClass = flag ? 'book_remove__from_list' : 'book_add__to_list';
  const { book_image, list_name, author, description, title, buy_links } = data;
  return `
    <div class="book_info_card">
        <button class="modal-info-close" type="button" data-modal-close>
            <svg class="close-modal-info" width="24" height="24">
                <use href="./images/symbol-defs.svg#close"></use>
            </svg>
        </button>
        <img src="${book_image}" alt="${title}" class="book_info_img">
        <h2 class="book_info_name">${list_name}</h2>
        <p class="book_info_author">${author}</p>
        <p class="book_info_description">${description}</p>
        <div class="info-logo-container">
            <a href="${buy_links[0].url}" class="book-store-link" target="_blank">
                <img src="" alt="Amazon" class="store-info-book" width="62" height="19">
            </a>
            <a href="${buy_links[1].url}" class="book-store-link" target="_blank">
                <img src="" alt="Apple Books" class="store-info-book" width="32" height="32">
            </a>
            <a href="${buy_links[4].url}" class="book-store-link" target="_blank">
                <img src="" alt="Bookshop" class="store-info-book" width="38" height="36">
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
