export function parseDiv(div) {
  const dataToLocalStorage = {};
  [...div.children].forEach(childDivs => {
    [...childDivs.children].forEach(childElementsDiv => {
      switch (childElementsDiv.tagName) {
        case 'H2':
          console.log(childElementsDiv.textContent);
          dataToLocalStorage.title = childElementsDiv.textContent;
          break;
        case 'IMG':
          dataToLocalStorage.book_image = childElementsDiv.children.src;
          // dataToLocalStorage.title = childElementsDiv.children.alt;
          break;
        case 'P':
          if (childElementsDiv.classList.contains('book_info_author')) {
            dataToLocalStorage.author = childElementsDiv.textContent;
          } else if (
            childElementsDiv.classList.contains('book_info_description')
          ) {
            const descr = childElementsDiv.textContent
              ? childElementsDiv.textContent
              : `Опис можете подивитись на сайті)`;
            dataToLocalStorage.description = descr;
          }
          break;
        case 'DIV':
          const buyLinks = [...childElementsDiv.children].map(idx => idx.href);
          dataToLocalStorage.buy_links = buyLinks;
      }
      return dataToLocalStorage;
    });
  });
  return dataToLocalStorage;
}
