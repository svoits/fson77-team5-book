import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getBookAPI from './getBookAPI';
import { createMarkUpTop } from './createMarkUpTop';

const contentWrapper = document.querySelector('.js-content-wrapper');

export async function renderBestsellers() {
  try {
    const data = await getBookAPI('top');

    if (!data.length) {
      contentWrapper.innerHTML = '';

      Notify.failure('Oops... Empty result');
      return;
    }

    contentWrapper.innerHTML = createMarkUpTop(data);
  } catch (e) {
    console.log(e);
  }
}

renderBestsellers();
