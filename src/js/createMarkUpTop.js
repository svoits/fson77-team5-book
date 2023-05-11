import { createListCardsTop } from "./createListCardsTop";
export function createMarkUpTop(data) {
    let count = 5;
    if(window.screen.width < 768) {
        count = 1;
    }else if(window.screen.width < 1440) {
        count = 3;
    }

    const listCategories = data.map(({list_name, books}) => {
       
        return `<div class="category">
        <p>${list_name}</p>
        <ul>
         ${ createListCardsTop(books.splice(0, count))}
        </ul>
        <button>See more</button>
      </div>`;
    }).join('');

const result = `<h1>Best Sellers Books</h1>
   ${listCategories}`;

    return result;
    }