import { supportArr } from './support-list';
import Swiper from 'swiper';

const supportListEl = document.querySelector('.js-support-list');
const btnSwiperEl = document.querySelector('.swiper-button');

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

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.swiper-button',
    },

    plugins: {
        scrollContainer: true,
    },
});

swiper.update();

btnSwiperEl.addEventListener('click', () => {
    swiper.slideNext();
});

