import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { teamgallery } from './team-gallery.js';
import '../sass/layouts/_gallery-footer.scss'

const galleryContent = document.querySelector('ul.footer-gallery');
function markup(items) {
  return items.map(({ preview, original, username, position, submitGit }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}">
              <img class="gallery__img" src="${preview}" data-source="${original}" 
              alt="${username}" /></a><p class="gallery__title">${position}</p>
              <a class="gallery__git" href="${submitGit}">${submitGit}</a></li>`;
  }).join('');
}
galleryContent.innerHTML = markup(teamgallery);
//
galleryContent.addEventListener('click', onGetImage);
function onGetImage(e) { e.preventDefault();
  const { target } = e;
  if (!target.classList.contains('gallery__img')) {
    return;
  }
//
  const instance = basicLightbox.create(`<img src="${target.dataset.source}"/>`, {
    onShow: () => window.addEventListener('keydown', onEscButton),
    onClose: () => window.removeEventListener('keydown', onEscButton), });
  instance.show();
  function onEscButton(e) {
    if (e.code === 'Escape') { instance.close(); }
  }
}