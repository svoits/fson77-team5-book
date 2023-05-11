import Notiflix from 'notiflix';
import  getBookAPI from './getBookAPI';
import { createMarkUpTop } from './createMarkUpTop';

export async function renderBestsellers() {

await getBookAPI('top').then((responce) => {
    console.log(responce);
    if(!responce.length){
        // коли будуть refs почистити js-content-wraper innerHTML = ''
        
        Notiflix.Notify.failure('Oops... Empty result');
        return;
    }

    const markup =  createMarkUpTop(responce);
    // для перевірки, прибрати потім
    //document.querySelector('.js-content-wrapper').innerHTML = markup;
    return markup;
}).catch((e) => {
    console.log(e);
});

}

// import { renderBestsellers } from './js/renderBestsellers';

// renderBestsellers();
