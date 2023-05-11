import Notiflix from 'notiflix';
import  getBookAPI from './getBookAPI';
import { createMarkUpTop } from './createMarkUpTop';

const contentWrapper = document.querySelector('.js-content-wrapper');

export async function renderBestsellers() {
try{
const data = await getBookAPI('top');
    console.log(data);
    if(!data.length) {
        contentWrapper.innerHTML = '';
        
        Notiflix.Notify.failure('Oops... Empty result');
        return;
    }

   console.log(createMarkUpTop(data));
    contentWrapper.innerHTML = createMarkUpTop(data);
    
}catch(e) {
    console.log(e);
};

}

// import { renderBestsellers } from './js/renderBestsellers';

// renderBestsellers();
