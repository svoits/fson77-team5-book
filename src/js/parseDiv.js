export function parseDiv(div) {
  const dataToLocalStorage = {};
  [...div.children].forEach(i => {
    switch (i.tagName) {
      case 'H2':
        dataToLocalStorage.list_name = i.textContent;
        break;
      case 'IMG':
        dataToLocalStorage.book_image = i.src;
        dataToLocalStorage.title = i.alt;
        break;
      case 'P':
        if (i.classList.contains('book_info_author')) {
          dataToLocalStorage.author = i.textContent;
        } else if (i.classList.contains('book_info_description')) {
          const descr = i.textContent
            ? i.textContent
            : `Опис можете подивитись на сайті)`;
          dataToLocalStorage.description = descr;
        }
        break;
      case 'DIV':
        const buyLinks = [...i.children].map(idx => idx.href);
        dataToLocalStorage.buy_links = buyLinks;
    }
  });
  return dataToLocalStorage;
}
