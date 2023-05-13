const SHOP_LIST_KEY = 'shopping-list';
export function searchBook(obj) {
  const getLocalStorage = localStorage.getItem(SHOP_LIST_KEY);
  const parseLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : [];
  const isLocaleStorage = parseLocalStorage.some(
    ({ title, author }) => title === obj.title && author === obj.author
  );
  return isLocaleStorage;
}

export function addToLocalStorage(obj) {
  const getLocalStorage = localStorage.getItem(SHOP_LIST_KEY);
  const parseLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : [];
  if (!searchBook(obj)) {
    parseLocalStorage.push(obj);
  }
  localStorage.setItem(SHOP_LIST_KEY, JSON.stringify(parseLocalStorage));
}

export function removeFromLocaleStorage(obj) {
  const getLocalStorage = localStorage.getItem(SHOP_LIST_KEY);
  const parseLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : [];
  const changeDataInLocaleStorage = parseLocalStorage.filter(
    ({ title, author }) => title !== obj.title && author !== obj.author
  );
  localStorage.setItem(
    SHOP_LIST_KEY,
    JSON.stringify(changeDataInLocaleStorage)
  );
}
