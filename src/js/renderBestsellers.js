import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getBookAPI from './getBookAPI';
import { createMarkUpTop } from './createMarkUpTop';
import renderBooksByCategory from './books-content-by-category';
import refs from './refs';

const countCategoriesInStack = 3;
let data;
let currentStackCategories;
let options = {
  root: null,
  rootMargin: '80px',
};

export let observer = new IntersectionObserver(loadMoreCategories, options);

export async function renderBestsellers() {
  try {
    refs.backdropLoader.classList.add('is-active');
    data = await getBookAPI('top');

    if (!data.length) {
      refs.contentWrapper.innerHTML = '';
      Notify.failure('Oops... Empty result');
      return;
    }

    currentStackCategories = 1;
    refs.contentWrapper.innerHTML = createMarkUpTop(
      data.slice(0, countCategoriesInStack)
    );
    refs.backdropLoader.classList.remove('is-active');
    observer.observe(refs.guard);
    addEventsListenersToLoadMoreBtns();
  } catch (e) {
    console.log(e);
  }
}

function addEventsListenersToLoadMoreBtns() {
  refs.contentWrapper.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      const currentCategory = e.target.dataset.category.trim();

      const allCategoriesEl = document.querySelectorAll('.js-category-btn');

      allCategoriesEl.forEach(btn => {
        if (btn.dataset.category === currentCategory) {
          btn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });

      const currentCategoryArr = currentCategory.split(' ');
      const arrLength = currentCategoryArr.length;

      refs.mainTitle.innerHTML = `${currentCategoryArr
        .slice(0, arrLength - 1)
        .join(' ')} 
          <span class="main-title-accent">
          ${currentCategoryArr.slice(-1)}</span>`;

      observer.unobserve(refs.guard);
      setTimeout(() => {
        renderBooksByCategory(currentCategory);
      }, 500);

      if (window.innerWidth >= 1440) {
        scrollToTargetAdjusted(110);
      } else if (window.innerWidth >= 768) {
        scrollToTargetAdjusted(110);
      } else {
        scrollToTargetAdjusted(90);
      }
    }
  });
}

function loadMoreCategories(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentStackCategories += 1;
      refs.contentWrapper.insertAdjacentHTML(
        'beforeend',
        createMarkUpTop(
          data.slice(
            countCategoriesInStack * (currentStackCategories - 1),
            countCategoriesInStack * currentStackCategories
          )
        )
      );
      if (
        currentStackCategories - 1 >=
        data.length / (currentStackCategories - 1)
      ) {
        observer.unobserve(refs.guard);
      }
    }
  });
}

renderBestsellers();

function scrollToTargetAdjusted(offset) {
  const headerOffset = offset;
  const elementPosition = refs.mainTitle.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
