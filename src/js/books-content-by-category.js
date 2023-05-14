import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getBookAPI from './getBookAPI';
import { createListCards } from './createListCards';

const contentWrapper = document.querySelector('.js-content-wrapper');
const backdropLoader = document.querySelector('.loader-backdrop');

export default async function renderBooksByCategory(currentCategory) {
  try {
    backdropLoader.classList.add('is-active');

    const data = await getBookAPI('category', currentCategory);

    if (!data.length) {
      contentWrapper.innerHTML = '';

      Notify.failure('Oops... Empty result');
      return;
    }

    contentWrapper.innerHTML = createListCards(data);
    backdropLoader.classList.remove('is-active');
  } catch (err) {
    console.log(err);
  }
}
