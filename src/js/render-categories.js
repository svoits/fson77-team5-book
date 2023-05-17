import getBookAPI from './getBookAPI';
import categoriesListMarkup from './categories-markup';
import { renderBestsellers } from './renderBestsellers';
import renderBooksByCategory from './books-content-by-category';
import { observer } from './renderBestsellers';
import refs from './refs';

async function renderCategoriesList() {
  try {
    const data = await getBookAPI('all');

    const sortedData = [...data].sort((a, b) => {
      return a.list_name.localeCompare(b.list_name);
    });

    refs.categoriesList.insertAdjacentHTML(
      'beforeend',
      categoriesListMarkup(sortedData)
    );

    addListenersToAllBtns();
  } catch (error) {
    console.log(error);
  }
}

function addListenersToAllBtns() {
  refs.categoriesList.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      const activeCategory = document.querySelector(
        '.js-category-btn.is-active'
      );

      activeCategory.classList.remove('is-active');
      e.target.classList.add('is-active');

      const currentCategory = e.target.dataset.category.trim();
      const currentCategoryArr = currentCategory.split(' ');
      const arrLength = currentCategoryArr.length;

      if (currentCategory === 'All categories') {
        refs.mainTitle.innerHTML = `Best Sellers <span class="main-title-accent">Books</span>`;
        renderBestsellers();
      } else {
        refs.mainTitle.innerHTML = `${currentCategoryArr
          .slice(0, arrLength - 1)
          .join(' ')} 
          <span class="main-title-accent">
          ${currentCategoryArr.slice(-1)}</span>`;
        observer.unobserve(refs.guard);
        renderBooksByCategory(currentCategory);
      }
    }
  });
}

renderCategoriesList();
