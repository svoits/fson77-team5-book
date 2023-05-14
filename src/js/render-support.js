import { supportArr } from './support-list';
import Swiper from 'swiper';

const supportListEl = document.querySelector('.js-support-list');
const btnSwiperDownEl = document.querySelector('.swiper-button-down');
const btnSwiperTopEl = document.querySelector('.swiper-button-top');
let activeSwiperEl = 0;

if (window.innerWidth >= 768) {
  activeSwiperEl = 3;
} else {
  activeSwiperEl = 5;
}
btnSwiperDownEl.addEventListener('click', () => {
  swiper.slideNext();

  if (
    supportListEl.children[activeSwiperEl].classList.contains(
      'swiper-slide-active'
    )
  ) {
    btnSwiperDownEl.hidden = true;
    btnSwiperTopEl.hidden = false;
  }
});

btnSwiperTopEl.addEventListener('click', () => {
  swiper.slidePrev();
  if (supportListEl.children[0].classList.contains('swiper-slide-active')) {
    btnSwiperDownEl.hidden = false;
    btnSwiperTopEl.hidden = true;
  }
});

let position = 0;
const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const markupCardFund = (
  { title, url, img, img2x },
  position
) => `<li class="support-list-item swiper-slide">
  <p class="support-number">${position}</p>
  <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
    <img
    srcset="${img} 1x, ${img2x} 2x"
      src="${img}"
      alt="${title}"
      width="149"
      loading="lazy"
    />
  </a>
</li>`;

const markupSetFunds = supportArr
  .map((el, i) => {
    position = addLeadingZero(i + 1);

    return markupCardFund(el, position);
  })
  .join('');

supportListEl.innerHTML = markupSetFunds;

const swiper = new Swiper('.my-swiper', {
  direction: 'vertical',
  spaceBetween: 20,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-down',
    prevEl: '.swiper-button-top',
  },

  plugins: {
    scrollContainer: true,
  },
});
