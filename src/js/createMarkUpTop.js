import { createListCards } from './createListCards';
export function createMarkUpTop(data) {
  let count = 5;
  if (window.innerWidth < 768) {
    count = 1;
  } else if (window.innerWidth < 1440) {
    count = 3;
  }

  const listCategories = data
    .map(({ list_name, books }) => {
      return `<div class="top-category-wrapper">
        <p class="top-category-title">${list_name}</p>
        
         ${createListCards(books.splice(0, count))}
       
        <button type="button" class="top-category-btn js-top-btn" data-category="${list_name}">See more</button>
      </div>`;
    })
    .join('');

  return listCategories;
}
