// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, update } from 'firebase/database';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  username as usernameEl,
  email as emailEl,
  password as passwordEl,
  submitUpBtn as signUpBtn,
  submitInBtn as signInBtn,
  signIn as toggleToSignInForm,
  signUp as toggleToSignUpForm,
  modalInstance,
  modalForm,
  onSignInBtnClick,
} from './modal-auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSuPYb_47bekWUnoJH68ThjbTqZMeENy4',
  authDomain: 'book-app-18a15.firebaseapp.com',
  databaseURL: 'https://book-app-18a15-default-rtdb.firebaseio.com',
  projectId: 'book-app-18a15',
  storageBucket: 'book-app-18a15.appspot.com',
  messagingSenderId: '660271436316',
  appId: '1:660271436316:web:d0ed0eb68aacf45f9d05d9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth();

// const modalForm = document.querySelector('.modal-form');
// const usernameEl = document.querySelector('.username-input');
// const emailEl = document.querySelector('.email-input');
// const passwordEl = document.querySelector('.password-input');

const headerNavList = document.querySelector('.header-nav-list');
const signUpHeader = document.querySelector('.sign-up-box');
const authorizedHeader = document.querySelector('.authorized-box');
const logOutBtn = document.querySelector('.log-out-btn');
const headerUsername = document.querySelector('.user-name');
const pageHeader = document.querySelector('.page-header');
const signUpMobileBox = document.querySelector('.sign-up-mobile-menu-box');
const authorizedMobileBox = document.querySelector(
  '.authorized-mobile-menu-box'
);
const mobileUsername = document.querySelector('.user-name-mobile');
const logOutMobileBtn = document.querySelector('.log-out-mobile-btn');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

signUpBtn.addEventListener('click', onSignUpFormSubmit);
signInBtn.addEventListener('click', onLoginFormSubmit);

export async function onSignUpFormSubmit(e) {
  e.preventDefault();

  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();

  await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        username,
        email,
      });
      signOut(auth);

      modalForm.reset();

      // Simulate clicking on the specified element.
      triggerEvent(toggleToSignInForm, 'click');

      Notify.success('Signed up!');
    })
    .catch(error => {
      Notify.failure(error.message);
    });
  await updateProfile(auth.currentUser, {
    displayName: username,
  });
}

export async function onLoginFormSubmit(e) {
  e.preventDefault();

  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();

  await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const currentDate = new Date();

      update(ref(database, 'users/' + user.uid), {
        last_login_date: currentDate,
      });
      modalInstance.close();
      modalForm.reset();

      Notify.success('Logged in!', {
        timeout: 2500,
      });
    })
    .catch(error => {
      Notify.failure(error.message);
    });
}

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    headerNavList.hidden = false;
    signUpHeader.hidden = true;
    authorizedHeader.hidden = false;
    headerUsername.textContent = user.displayName;
    pageHeader.classList.add('logged-in');
    signUpMobileBox.hidden = true;
    authorizedMobileBox.hidden = false;
    mobileUsername.textContent = user.displayName;
    mobileMenuContainer.classList.add('logged-in');
  } else {
    // User is signed out
    headerNavList.hidden = true;
    signUpHeader.hidden = false;
    authorizedHeader.hidden = true;
    pageHeader.classList.remove('logged-in');
    logOutBtn.classList.remove('is-active');
    signUpMobileBox.hidden = false;
    authorizedMobileBox.hidden = true;
    mobileMenuContainer.classList.remove('logged-in');
  }
});

logOutBtn.addEventListener('click', onLogOutBtnClick);
logOutMobileBtn.addEventListener('click', onLogOutBtnClick);

function onLogOutBtnClick(e) {
  signOut(auth);
  window.location = 'index.html';
}

function triggerEvent(elem, event) {
  const clickEvent = new Event(event);
  elem.dispatchEvent(clickEvent);
}
