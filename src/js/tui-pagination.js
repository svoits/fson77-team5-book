import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderShoppingList } from './renderShoppingList';
import refs from './refs';

const SHOP_LIST_KEY = 'shopping-list';

const perPage = window.innerWidth >= 768 ? 3 : 4;
let visiblePageBtns = window.innerWidth >= 768 ? 3 : 2;

export const options = {
  totalItems: 3,
  itemsPerPage: perPage,
  visiblePages: visiblePageBtns,
  centerAlign: true,
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

export const pagination = new Pagination(
  refs.paginationContainer,
  paginationOptions()
);

pagination.on('beforeMove', evt => {
  const currentPage = evt.page;
  renderShoppingList(currentPage);
});

export function paginationOptions() {
  const shoppingList = JSON.parse(localStorage.getItem(SHOP_LIST_KEY)) ?? [];
  options.totalItems = shoppingList.length;
  return options;
}
