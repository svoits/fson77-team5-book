import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from 'firebase/analytics';

import getBookAPI from './js/getBookAPI';
async function showGallery () {

 // const data = await getBookAPI('bookId', '643282b1e85766588626a085');
 //const data = await getBookAPI('all');
 const data = await getBookAPI('category', 'Picture Books');
  return data;
}
console.log(showGallery());