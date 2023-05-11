export default function categoriesListMarkup(data) {
  return data
    .map(category => {
      return `<li class="categories-list-item">
      <button class="categories-list-button js-category-btn" type="button">${category.list_name}</button>
    </li>`;
    })
    .join('');
}
