export function shoppingListMarkup(books) {
  return books
    .map(({ book_image, title, list_name, description, author, buy_links }) => {
      return `
        <li class="wrap-about-book">
        <img
          class="wrap-about-img"
          src="${book_image}"
          alt="${title}"
        />
        <div class="wrap-about-book-info">
          <div class="wrap-about-book-style">
            <p class="wrap-about-title">${title}</p>
            <button class="wrap-about-book-remove" data-title="${title}" data-author="${author}">
              <svg
                class="wrap-about-book-remove-icon"
                width="16"
                height="16"
              >
                <use href="./images/symbol-defs.svg#trash"></use>
              </svg>
            </button>
          </div>
          <p class="wrap-about-category">${list_name}</p>
          <p class="wrap-about-description">${description}
            David Burroughs was once a devoted father to his three-year-old
            son Matthew, living a dream life just a short drive away from
            the working-class suburb where he and his wife, Cheryl, first
            fell in love--until one fateful night when David woke suddenly
            to discover Matthew had been murdered while David was asleep
            just down the hall.
          </p>
          <div class="wrap-about-book-styles">
            <p class="wrap-about-author">${author}</p>
            <ul class="trading-platforms-list list">
              <li class="trading-platforms-list-item">
                <a class="trading-platforms-list-item-link" href="${buy_links[0].url}}">
                  <img
                    class="trading-platforms-list-item-img-amazon"
                    srcset="
                      ./images/trading-platforms/amazon.png    1x,
                      ./images/trading-platforms/amazon@2x.png 2x
                    "
                    src="./images/trading-platforms/amazon.png"
                    alt="Amazon"
                  />
                </a>
              </li>
              <li class="trading-platforms-list-item">
              <a class="trading-platforms-list-item-link" href="${buy_links[1].url} ">
                <img
                  class="trading-platforms-list-item-img-apple-books"
                  srcset="
                    ./images/trading-platforms/apple-books.png    1x,
                    ./images/trading-platforms/apple-books@2x.png 2x
                  "
                  src="./images/trading-platforms/apple-books.png"
                  alt="Apple books"
                />
              </a>
            </li>
            <li class="trading-platforms-list-item">
              <a class="trading-platforms-list-item-link" href="${buy_links[2].url}">
                <img
                  class="trading-platforms-list-item-img-bookshop"
                  srcset="
                    ./images/trading-platforms/bookshop.png    1x,
                    ./images/trading-platforms/bookshop@2x.png 2x
                  "
                  src="./images/trading-platforms/bookshop.png"
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
