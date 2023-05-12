export async function markupCardBookInfo(id) {
    const markupCard = id.map(({ book_image, list_name, author, description, title, buy_links: { name, url } }) => {
        return `
        <div class="book_info_card">
            <h2 class="book_info_name">${list_name}</h2>
            <img src="${book_image}" alt="${title}">
            <p class="book_info_author">${author}</p>
            <p class="book_info_description">${description}</p>
            <a href="${url}">${name}</a><a href="${url}">${name}</a><a href="${url}">${name}</a>
            <button class="book_add__to_list" type="button" id="addRemoveBookButton">ADD TO SHOPPING LIST</button>
        </div>`
    }).join('');

    return markupCard;
}

console.log(markupCardBookInfo());
{/* <button class="book_remove_from_list" type="button">REMOVE FROM SHOPPING LIST</button> */}
