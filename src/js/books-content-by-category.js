import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getBookAPI from './getBookAPI';
import { createListCards } from './createListCards';
import refs from './refs';

export default async function renderBooksByCategory(currentCategory) {
  try {
    refs.backdropLoader.classList.add('is-active');

    const data = await getBookAPI('category', currentCategory);

    if (!data.length) {
      refs.contentWrapper.innerHTML = '';

      Notify.failure('Oops... Empty result');
      return;
    }

    refs.contentWrapper.innerHTML = createListCards(data);
    refs.backdropLoader.classList.remove('is-active');
  } catch (err) {
    console.log(err);
  }
}
