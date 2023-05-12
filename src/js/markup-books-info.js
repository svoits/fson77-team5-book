export function markupCardBookInfo(data) {
    const { book_image, list_name, author, description, title, buy_links } = data;
    return `
    <div class="book_info_card">
        <h2 class="book_info_name">${list_name}</h2>
        <img src="${book_image}" alt="${title}">
        <p class="book_info_author">${author}</p>
        <p class="book_info_description">${description}</p>
        <a href="${buy_links[0].url}">${buy_links[0].name}</a><a href="${buy_links[1].url}">${buy_links[1].name}</a><a href="${buy_links[4].url}">${buy_links[4].name}</a>
        <button class="book_add__to_list" type="button" id="addRemoveBookButton">ADD TO SHOPPING LIST</button>
    </div>`
}