import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const btnEl = document.querySelector('[sign-modal-open]');
const modalForm = document.querySelector('.modal-form');
const { username, signIn, signUp, submitBtn } = modalForm.elements;
const signBtnWrapper = document.querySelector('.modal-sign-btn-wrapper');
const modalCloseBtn = document.querySelector('[js-modal-close]');

const modalInstance = basicLightbox.create(
  document.querySelector('.auth-modal-wrapper'),
  {
    onShow: () => {
      addEventListener('keydown', onEscClick);
    },
    onClose: () => {
      addEventListener('keydown', onEscClick);
    },
  }
);

btnEl.addEventListener('click', onBtnClick);
modalCloseBtn.addEventListener('click', onModalCloseBtnClick);
signBtnWrapper.addEventListener('click', onSignBtnWrapperClick);

function onSignBtnWrapperClick(e) {
  if (
    e.target.nodeName !== 'BUTTON' ||
    e.target.classList.contains('is-active')
  ) {
    return;
  }

  const activeSignBtn = document.querySelector('.modal-sign-btn.is-active');
  activeSignBtn.classList.remove('is-active');
  e.target.classList.add('is-active');

  if (signIn.classList.contains('is-active')) {
    modalForm.firstElementChild.hidden = true;
    submitBtn.textContent = 'sign in';
  } else {
    modalForm.firstElementChild.hidden = false;
    submitBtn.textContent = 'sign up';
  }
}

function onBtnClick(e) {
  modalInstance.show();
}

function onModalCloseBtnClick(e) {
  modalInstance.close();
}

function onEscClick(e) {
  if (e.code === 'Escape') {
    modalInstance.close();
  }
}

export { onBtnClick };
