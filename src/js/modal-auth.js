import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';

const { signIn, signUp, submitInBtn, submitUpBtn } = refs.modalForm.elements;

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

refs.openAuthModalBtn.forEach(btn =>
  btn.addEventListener('click', onAuthModalBtnClick)
);

refs.modalCloseBtn.addEventListener('click', onModalCloseBtnClick);

signIn.addEventListener('click', onSignInBtnClick);
signUp.addEventListener('click', onSignUpBtnClick);

export function onSignInBtnClick(e) {
  e.currentTarget.classList.add('is-active');
  signUp.classList.remove('is-active');

  refs.modalForm.firstElementChild.hidden = true;
  refs.modalForm.username.required = false;
  submitInBtn.hidden = false;
  submitUpBtn.hidden = true;

  submitInBtn.parentNode.insertBefore(submitInBtn, submitUpBtn);
}

function onSignUpBtnClick(e) {
  e.currentTarget.classList.add('is-active');
  signIn.classList.remove('is-active');

  refs.modalForm.firstElementChild.hidden = false;
  submitInBtn.hidden = true;
  submitUpBtn.hidden = false;
  submitUpBtn.parentNode.insertBefore(submitUpBtn, submitInBtn);
}

function onAuthModalBtnClick() {
  modalInstance.show();
  modalInstance.element().classList.add('basic-auth');
}

function onModalCloseBtnClick() {
  modalInstance.close();
}

function onEscClick(e) {
  if (e.code === 'Escape') {
    modalInstance.close();
  }
}
