//let  throttle = require('lodash.throttle'); 

export const btnUp = {
    el: document.querySelector('.js-scroll-top-btn'),
    show() {
      this.el.classList.remove('visually-hidden');
    },
    hide() {
      this.el.classList.add('visually-hidden');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        console.log('scroll');
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
    }
  }
  
  
  btnUp.addEventListener();
