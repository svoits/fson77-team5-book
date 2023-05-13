export default function categoriesListMarkup(data) {
  return data
    .map(({ list_name }) => {
      return `<li class="categories-list-item">
      <button class="categories-list-button js-category-btn" type="button" data-category="${list_name}">${list_name}</button>
    </li>`;
    })
    .join('');
}
