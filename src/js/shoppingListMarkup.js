import amazon from '../images/trading-platforms/amazon.png';
import amazon_2x from '../images/trading-platforms/amazon@2x.png';
import apple from '../images/trading-platforms/apple-books.png';
import apple_2x from '../images/trading-platforms/apple-books@2x.png';
import bookshop from '../images/trading-platforms/bookshop.png';
import bookshop_2x from '../images/trading-platforms/bookshop@2x.png';
import logos from '../images/symbol-defs.svg';
import { imagePlaceholder } from './markup-books-info';

export function shoppingListMarkup(books) {
  return books
    .map(({ book_image, title, list_name, description, author, buy_links }) => {
      return `
        <li class="wrap-about-book">
        <div class="img-about-wrapper">
        <img
          class="about-book-img"
          src="${book_image || imagePlaceholder}"
          alt="${title}"
          loading="lazy"
        />
        </div>
        <div class="wrap-about-book-info">
          <div class="wrap-about-book-style">
            <p class="wrap-about-title">${title}</p>
            <button class="wrap-about-book-remove" data-title="${title}" data-author="${author}">
              <svg
                class="wrap-about-book-remove-icon"
                width="16"
                height="16"
              >
                <use href="${logos}#trash"></use>
              </svg>
            </button>
          </div>
          <p class="wrap-about-category">${list_name}</p>
          <p class="wrap-about-description">${description}</p>
          <div class="wrap-about-book-styles">
            <p class="wrap-about-author">${author}</p>
            <ul class="trading-platforms-list list">
              <li class="trading-platforms-list-item">
                <a class="trading-platforms-list-item-link" href="${
                  buy_links[0]
                }" target="_blank" rel="noreferrer noopener nofollow">
                  <img
                    class="trading-platforms-list-item-img-amazon"
                    srcset="
                      ${amazon}    1x,
                      ${amazon_2x} 2x
                    "
                    src="${amazon}"
                    alt="Amazon"
                  />
                </a>
              </li>
              <li class="trading-platforms-list-item">
              <a class="trading-platforms-list-item-link" href="${
                buy_links[1]
              }" target="_blank" rel="noreferrer noopener nofollow">
                <img
                  class="trading-platforms-list-item-img-apple-books"
                  srcset="
                    ${apple}    1x,
                    ${apple_2x} 2x
                  "
                  src="${apple}"
                  alt="Apple books"
                />
              </a>
            </li>
            <li class="trading-platforms-list-item">
              <a class="trading-platforms-list-item-link" href="${
                buy_links[2]
              }" target="_blank" rel="noreferrer noopener nofollow">
                <img
                  class="trading-platforms-list-item-img-bookshop"
                  srcset="
                    ${bookshop}    1x,
                    ${bookshop_2x} 2x
                  "
                  src="${bookshop_2x}"
                  alt="bookshop"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>`;
    })
    .join('');
}
