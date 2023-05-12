export async function markupCardBookInfo(_id) {
    return _id.map(({ book_image, list_name, author, description, title, buy_links }) => {
        const arr = buy_links.forEach((element) => {
            console.log(element.name);
            console.log(element.url);
        });
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
}


// buy_links: { name, url }