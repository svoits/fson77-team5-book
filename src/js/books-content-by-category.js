import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getBookAPI from './getBookAPI';
import { createListCardsTop } from './createListCardsTop';

const contentWrapper = document.querySelector('.js-content-wrapper');

export default async function renderBooksByCategory(currentCategory) {
  try {
    const data = await getBookAPI('category', currentCategory);

    if (!data.length) {
      contentWrapper.innerHTML = '';

      Notify.failure('Oops... Empty result');
      return;
    }

    contentWrapper.innerHTML = createListCardsTop(data);
  } catch (err) {
    console.log(err);
  }
}
