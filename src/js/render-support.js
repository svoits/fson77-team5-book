import { supportArr } from './support-list';
import Swiper from 'swiper';
import refs from './refs';

let activeSwiperEl = 0;

if (window.innerWidth >= 768) {
  activeSwiperEl = 3;
} else {
  activeSwiperEl = 5;
}
refs.btnSwiperDown.addEventListener('click', () => {
  swiper.slideNext();

  if (
    refs.supportList.children[activeSwiperEl].classList.contains(
      'swiper-slide-active'
    )
  ) {
    refs.btnSwiperDown.hidden = true;
    refs.btnSwiperTop.hidden = false;
  }
});

refs.btnSwiperTop.addEventListener('click', () => {
  swiper.slidePrev();
  if (refs.supportList.children[0].classList.contains('swiper-slide-active')) {
    refs.btnSwiperDown.hidden = false;
    refs.btnSwiperTop.hidden = true;
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

refs.supportList.innerHTML = markupSetFunds;

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
