import { scrollToTop } from "./scrollToTop";

const optionsObserver = {
    root:  null,
    rootMargin: '700px',
    threshold: 1.0
}

const btnUp = document.querySelector(".js-scrollToTopBtn");

const scrollObserver = function(entries, observer) {
    
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(isActiveBtn()) {
                btnUp.classList.add('visually-hidden');
                btnUp.removeEventListener('click', scrollToTop);
            } 
        }else{
            if(!isActiveBtn()) {
                btnUp.classList.remove('visually-hidden');
                btnUp.addEventListener('click', scrollToTop);
            } 
        }
    })
}

export const observer = new IntersectionObserver(scrollObserver, optionsObserver);

function isActiveBtn() {
    if(btnUp.classList.contains('visually-hidden')){
        return false;
    }
    return true;
}