import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { teamGallery } from './team-gallery.js';

const teamLogoEl = document.querySelector('.js-modal-team');

teamLogoEl.addEventListener('click', onTeamLogoClick);

function onTeamLogoClick(e) {
  e.preventDefault();

  const instance = basicLightbox.create(teamMarkUp(markup(teamGallery)), {
    onShow: () => {
      disableBodyScroll(document.body);

      window.addEventListener('keydown', onEscButton);
    },
    onClose: () => {
      enableBodyScroll(document.body);
      window.removeEventListener('keydown', onEscButton);
    },
  });

  instance.show();
  const modalCloseBtn = document.querySelector('.js-modal-close');
  modalCloseBtn.addEventListener('click', onModalCloseBtnClick);

  function onModalCloseBtnClick() {
    instance.close();
  }

  function onEscButton(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}

function markup(data) {
  return data
    .map(({ original, original_2x, username, position, git }) => {
      return `<li class="team-member">
      <img
                  class="team-member-img"
                  srcset="
                    ${original}    1x,
                    ${original_2x} 2x
                  "
                  src="${original}"
                  alt="Apple books"
                />
      <div class="team-box">
      <p class="team-member-name">${username}</p>
      <p class="team-member-title">${position}</p>
      <a class="team-member-link" href="${git}">GitHub</a>
      </div>
      </li>`;
    })
    .join('');
}

function teamMarkUp(data) {
  return `<div class="team-wrapper">
    <button class="team-modal-close  js-modal-close" type="button">
    <svg class="close-modal-info" xmlns="http://www.w3.org/2000/svg" width="28" height="28" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 7 7 21M7 7l14 14"/></svg>
    </button>
    <h2 class="team-modal-title">NOVEL DEVS</h2>
    <ul class="team-list">${data}</ul>
  </div>`;
}
