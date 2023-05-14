import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderShoppingList } from './renderShoppingList';

const SHOP_LIST_KEY = 'shopping-list';
const paginationContainer = document.getElementById('pagination');
const perPage = window.screen.width >= 768 ? 3 : 4;
const visiblePageBtns = window.screen.width >= 768 ? 3 : 2;

const options = {
  totalItems: 3,
  itemsPerPage: perPage,
  visiblePages: visiblePageBtns,
  page: 1,
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

const pagination = new Pagination(paginationContainer, paginationOptions());

pagination.on('beforeMove', evt => {
  const currentPage = evt.page;
  renderShoppingList(currentPage);
});

function paginationOptions() {
  const shoppingList = JSON.parse(localStorage.getItem(SHOP_LIST_KEY)) ?? [];
  options.totalItems = shoppingList.length;
  return options;
}
