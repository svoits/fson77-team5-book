import getBookAPI from './js/getBookAPI';

async function markupCardBookInfo() {
    const data = await getBookAPI('bookId');

    const markupCard = data.map(({ book_image, list_name, author, description }) => {
        return `
        <div class="book_info_card">
            <h2 class="book_info_name">${list_name}</h2>
            <img src="${book_image}" alt="${list_name}">
            <p class="book_info_author">${author}</p>
            <p class="book_info_description">${description}</p>
            // <a href="">${}</a><a href="">${}</a><a href="">${}</a>
            <button class="book_add_shopping-list" type="button">ADD TO SHOPPING LIST</button>
        </div>`
    })
}
