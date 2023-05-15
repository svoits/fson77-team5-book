import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getBookAPI from './getBookAPI';
import { createMarkUpTop } from './createMarkUpTop';
import renderBooksByCategory from './books-content-by-category';

const contentWrapper = document.querySelector('.js-content-wrapper');
const mainTitleEl = document.querySelector('.js-main-title');
const backdropLoader = document.querySelector('.loader-backdrop');
const target = document.querySelector(".js-guard");
const countCategoriesInStack = 3;
let data;
let currentStackCategories;
let options = {
  root: null,
  rootMargin: "80px",
};
let observer = new IntersectionObserver(loadMoreCategories, options);

export async function renderBestsellers() {
  try {
    backdropLoader.classList.add('is-active');
    data = await getBookAPI('top');

    if (!data.length) {
      contentWrapper.innerHTML = '';
      Notify.failure('Oops... Empty result');
      return;
    }

    currentStackCategories = 1;
    contentWrapper.innerHTML = createMarkUpTop(data.slice(0, countCategoriesInStack));
    backdropLoader.classList.remove('is-active');
    observer.observe(target);
    addEventsListenersToLoadMoreBtns();

  } catch (e) {
    console.log(e);
  }
}

function addEventsListenersToLoadMoreBtns() {
  const allBtns = document.querySelectorAll('.js-top-btn');

  allBtns.forEach(categoryBtn => {
    categoryBtn.addEventListener('click', onMoreBtnClick);
  });
}

function onMoreBtnClick(e) {
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

  mainTitleEl.innerHTML = `${currentCategoryArr
    .slice(0, arrLength - 1)
    .join(' ')} 
          <span class="main-title-accent">
          ${currentCategoryArr.slice(-1)}</span>`;

  renderBooksByCategory(currentCategory);

  if (window.innerWidth >= 1440) {
    scrollToTargetAdjusted(110);
  } else if (window.innerWidth >= 768) {
    scrollToTargetAdjusted(110);
  } else {
    scrollToTargetAdjusted(90);
  }
}

function loadMoreCategories(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      currentStackCategories += 1;
      contentWrapper.insertAdjacentHTML("beforeend", createMarkUpTop(data.slice(countCategoriesInStack * (currentStackCategories - 1), countCategoriesInStack * currentStackCategories)));
      if ((currentStackCategories -1) >= data.length / (currentStackCategories - 1)) {
        observer.unobserve(target);
      }
    }
  });
}

renderBestsellers();

function scrollToTargetAdjusted(offset) {
  const headerOffset = offset;
  const elementPosition = mainTitleEl.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
