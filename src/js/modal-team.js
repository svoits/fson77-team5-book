import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { teamGallery } from './team-gallery.js';
import '../sass/layouts/_gallery-footer.scss';

// const galleryContent = document.querySelector('ul.footer-gallery');

const teamLogoEl = document.querySelector('.js-modal-team');

teamLogoEl.addEventListener('click', onTeamLogoClick);

function onTeamLogoClick(e) {
  e.preventDefault();

  const instance = basicLightbox.create(teamMarkUp(markup(teamGallery)), {
    onShow: () => window.addEventListener('keydown', onEscButton),
    onClose: () => window.removeEventListener('keydown', onEscButton),
  });

  instance.show();

  function onEscButton(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}

function markup(data) {
  return data
    .map(({ original, username, position, git }) => {
      return `<li class="team-member">
      <img src="${original}" alt="${username}" />
      <p>${username}</p>
      <p>${position}</p>
      <a href="${git}">GitHub</a>
    </li>`;
    })
    .join('');
}

function teamMarkUp(data) {
  return `<div class="team-wrapper">
    <button class="team-modal-close" type="button">
      <svg class="close-modal-info" width="24" height="24">
        <use href="./images/symbol-defs.svg#close"></use>
      </svg>
    </button>
    <ul class="team-list">${data}</ul>
  </div>`;
}

// galleryContent.innerHTML = markup(teamgallery);
// //
// galleryContent.addEventListener('click', onGetImage);
// function onGetImage(e) {
//   e.preventDefault();
//   const { target } = e;
//   if (!target.classList.contains('gallery__img')) {
//     return;
//   }
//   //
//   const instance = basicLightbox.create(
//     `<img src="${target.dataset.source}"/>`,
//     {
//       onShow: () => window.addEventListener('keydown', onEscButton),
//       onClose: () => window.removeEventListener('keydown', onEscButton),
//     }
//   );
//   instance.show();
//   function onEscButton(e) {
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   }
// }
