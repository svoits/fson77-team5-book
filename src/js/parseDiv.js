export function parseDiv(div) {
  const dataToLocalStorage = {};
  [...div.children].forEach(childDivs => {
    [...childDivs.children].forEach(childElementsDiv => {
      switch (childElementsDiv.tagName) {
        case 'H2':
          dataToLocalStorage.title = childElementsDiv.textContent;
          dataToLocalStorage.list_name = childElementsDiv.dataset.category;
          break;
        case 'IMG':
          dataToLocalStorage.book_image = childElementsDiv.src;
          break;
        case 'P':
          if (childElementsDiv.classList.contains('book_info_author')) {
            dataToLocalStorage.author = childElementsDiv.textContent;
          } else if (
            childElementsDiv.classList.contains('book_info_description')
          ) {
            const descr = childElementsDiv.textContent
              ? childElementsDiv.textContent
              : `Sorry, there is no description. You can visit any of the following sites below for more information about book.`;
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
