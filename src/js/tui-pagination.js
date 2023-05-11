import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const SHOP_LIST_KEY = 'shopping-list';
const paginationContainer = document.getElementById('pagination');
const pagination = new Pagination(paginationContainer, paginationOptions());

// let perPage;
// let visiblePageBtns;

function paginationOptions() {
  //   const shoppingList = JSON.parse(localStorage.getItem(SHOP_LIST_KEY)) || [];
  //   if (window.screen.width >= 768) {
  //     perPage = 3;
  //     visiblePageBtns = 3;
  //   } else {
  //     perPage = 4;
  //     visiblePageBtns = 2;
  //   }
  const options = {
    totalItems: 100,
    // totalItems: shoppingList.length,
    // itemsPerPage: perPage,
    itemsPerPage: 5,
    visiblePages: 3,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  return options;
}

// pagination.on('beforeMove', evt => {
//   const currentPage = evt.page;
//   //   renderShoppingList(currentPage);
// });
