import { scrollToTop } from "./scrollToTop";

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

export const observer = new IntersectionObserver(scrollObserver);

function isActiveBtn() {
    if(btnUp.classList.contains('visually-hidden')){
        return false;
    }
    return true;
}