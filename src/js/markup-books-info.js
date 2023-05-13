import amazon from '../images/trading-platforms/amazon.png';
import amazon_2x from '../images/trading-platforms/amazon@2x.png';
import apple from '../images/trading-platforms/apple-books.png';
import apple_2x from '../images/trading-platforms/apple-books@2x.png';
import bookshop from '../images/trading-platforms/bookshop.png';
import bookshop_2x from '../images/trading-platforms/bookshop@2x.png';



export function markupCardBookInfo(data) {
    const { book_image, list_name, author, description, title, buy_links } = data;
    return `
    <div class="book_info_card" data-info-close>
    <button class="modal-info-close" type="button" data-modal-close>
    <svg class="close-modal-info" xmlns="http://www.w3.org/2000/svg" width="28" height="28" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 7 7 21M7 7l14 14"/></svg>
    </button>
    <div class="info_img-author_container">
        <img src="${book_image}" alt="${title}" class="book_info_img">

        <div class="info_about_book">
            <h2 class="book_info_name">${list_name}</h2>
            <p class="book_info_author">${author}</p>
            <p class="book_info_description">${description}</p>
            <div class="info-logo-container">
            <a href="${buy_links[0].url}" class="book-store-link" target="_blank">
                <img srcset="${amazon} 1x,
                ${amazon_2x} 2x"
              src="${amazon}"
                alt="Amazon" class="store-info-book" width="62" height="19">
            </a>
            <a href="${buy_links[1].url}" class="book-store-link" target="_blank">
                <img srcset="${apple} 1x,
                ${apple_2x} 2x"
              src="${apple}" 
                alt="Apple Books" class="store-info-book" width="32" height="32">
            </a>
            <a href="${buy_links[4].url}" class="book-store-link" target="_blank">
                <img srcset="${bookshop} 1x,
                ${bookshop_2x} 2x"
              src="${bookshop}"  
                alt="Bookshop" class="store-info-book" width="38" height="36">
            </a>
        </div>
        </div>
        </div>
        <button class="btn-book-info book_add__to_list" type="button" id="addRemoveBookButton">ADD TO SHOPPING LIST</button>
        <p class="book-infoBtn-explanation is-hidden">
        Сongratulations! You have added the book to the shopping list. 
        To delete, press the button “Remove from the shopping list”.
        </p>
    </div>`
}

// REMOVE FROM SHOPPING LIST
// ADD TO SHOPPING LIST
// book_remove_from_list