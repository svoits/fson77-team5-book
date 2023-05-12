import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openAuthModalBtn = document.querySelector('[sign-modal-open]');
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

openAuthModalBtn.addEventListener('click', onAuthModalBtnClick);
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
    modalForm.username.required = false;
    submitBtn.textContent = 'sign in';
  } else {
    modalForm.firstElementChild.hidden = false;
    submitBtn.textContent = 'sign up';
  }
}

function onAuthModalBtnClick(e) {
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

export {
  onSignBtnWrapperClick,
  onAuthModalBtnClick,
  onModalCloseBtnClick,
  onEscClick,
};
