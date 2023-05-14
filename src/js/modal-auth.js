import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openAuthModalBtn = document.querySelectorAll('[data-sign-modal-open]');
export const modalForm = document.querySelector('.modal-form');
export const {
  username,
  email,
  password,
  signIn,
  signUp,
  submitInBtn,
  submitUpBtn,
} = modalForm.elements;
export const signBtnWrapper = document.querySelector('.modal-sign-btn-wrapper');
const modalCloseBtn = document.querySelector('.js-modal-close');

export const modalInstance = basicLightbox.create(
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

openAuthModalBtn.forEach(btn =>
  btn.addEventListener('click', onAuthModalBtnClick)
);
modalCloseBtn.addEventListener('click', onModalCloseBtnClick);

signIn.addEventListener('click', onSignInBtnClick);
signUp.addEventListener('click', onSignUpBtnClick);

export function onSignInBtnClick(e) {
  // const activeSignBtn = document.querySelector('.modal-sign-btn.is-active');
  // activeSignBtn.classList.remove('is-active');
  e.currentTarget.classList.add('is-active');
  signUp.classList.remove('is-active');

  modalForm.firstElementChild.hidden = true;
  modalForm.username.required = false;
  submitInBtn.hidden = false;
  submitUpBtn.hidden = true;

  submitInBtn.parentNode.insertBefore(submitInBtn, submitUpBtn);
}
function onSignUpBtnClick(e) {
  e.currentTarget.classList.add('is-active');
  signIn.classList.remove('is-active');

  modalForm.firstElementChild.hidden = false;
  submitInBtn.hidden = true;
  submitUpBtn.hidden = false;
  submitUpBtn.parentNode.insertBefore(submitUpBtn, submitInBtn);
}
function onAuthModalBtnClick(e) {
  modalInstance.show();
  modalInstance.element().classList.add('basic-auth');
}

function onModalCloseBtnClick(e) {
  modalInstance.close();
}

function onEscClick(e) {
  if (e.code === 'Escape') {
    modalInstance.close();
  }
}
