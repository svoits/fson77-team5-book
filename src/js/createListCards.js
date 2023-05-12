export function createListCards(books) {
  const listCardCategory = books
    .map(({ _id, book_image, author, title }) => {
      return `
        <li>
            <a href="" class="card-category-link js-card-link link" data-id="${_id}">
                <img src="${book_image}" alt="${title}" class="card-category-img">
                <p class="card-category-sub">${title}</p>
                <p class="card-category-descrption">${author}</p>
            </a>
      </li>
        `;
    })
    .join('');

  return `<ul class="top-category-list list">${listCardCategory}</ul>`;
}
