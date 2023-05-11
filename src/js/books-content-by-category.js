import getBookAPI from "./getBookAPI";

export default async function renderBooksByCategory(currentCategory) {
  try {
    const data = await getBookAPI('category', currentCategory);
    console.log(data);
  
  } catch (err) {
    console.log(err);
  }
}






// 3. Данные перебрать map+join
// 4. Разметка данных
