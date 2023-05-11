export function createListCardsTop(books) {
    return books.map(({_id, book_image, author, title}) => {
        return `
        <li>
            <a href="" class="js-card" data-id="${_id}">
                <img src="${book_image}" alt="${title}">
                <p>${title}</p>
                <p>${author}</p>
            </a>
      </li>
        `
    }).join('');
}