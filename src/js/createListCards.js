import { imagePlaceholder } from './markup-books-info';
export function createListCards(books) {
  const listCardCategory = books
    .map(({ _id, book_image, author, title }) => {
      return `
        <li class="card-category-item">
            <a href="" class="card-category-link js-card-link link" data-id="${_id}">
                <div class="card-category-img-wrap">
                  <img src="${
                    book_image || imagePlaceholder
                  }" alt="${title}" class="card-category-img" loading="lazy">
                  <p class="card-category-img-text">quick view</p>
                </div>
                <p class="card-category-title">${title}</p>
                <p class="card-category-author">${author}</p>
            </a>
      </li>
        `;
    })
    .join('');

  return `<ul class="card-category-list list">${listCardCategory}</ul>`;
}
