import axios from 'axios';

const URL = {
    all: 'https://books-backend.p.goit.global/books/category-list',
    top: 'https://books-backend.p.goit.global/books/top-books',
    category: 'https://books-backend.p.goit.global/books/category?category=',
    bookId: 'https://books-backend.p.goit.global/books/',
};

export default async function getBookAPI(type, value) {
    const param = value ? value : '';
    console.log(type, value, `${URL[type]}${param}`);
    try {
      const response = await axios.get(`${URL[type]}${param}`);
      
      return response.data;

    } catch (error) {
        
      throw Error (error.status);

    }
  }

  //Example include this function

//   import getBookAPI from './js/getBookAPI';
//   async function showGallery () {

//     const data = await getBookAPI('bookId', '643282b1e85766588626a085');
//     return data;
// }
// console.log(showGallery());