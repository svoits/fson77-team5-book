// const checkBoxEl = document.querySelector('.js-theme-toggle');
// const body = document.querySelector('body');

// const STORAGE_KEY = 'theme';
// const theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// export default function onCheckBoxClick(e) {
//   let themeValue = '';
//   if (e.currentTarget.checked) {
//     themeValue = theme.DARK;
//     body.classList.add(themeValue);
//   } else {
//     themeValue = theme.LIGHT;
//     body.classList.remove(theme.DARK);
//   }
//   localStorage.setItem(STORAGE_KEY, themeValue);
// }

// function savedThemeOnPageReload() {
//   const savedTheme = localStorage.getItem(STORAGE_KEY);

//   if (savedValue === theme.DARK) {
//     body.classList.add(savedTheme);
//     checkBoxEl.setAttribute('checked', true);
//   }
// }

// savedThemeOnPageReload();
