export function createListCardsTop(books) {
  const listCardCategory = books
    .map(({ _id, book_image, author, title }) => {
      return `
        <li>
            <a href="" class="top-category-link js-top-link link" data-id="${_id}">
                <img src="${book_image}" alt="${title}" class="top-category-img">
                <p class="top-category-sub">${title}</p>
                <p class="top-category-descrption">${author}</p>
            </a>
      </li>
        `;
    })
    .join('');

  return `<ul class="top-category-list list">${listCardCategory}</ul>`;
}
