import refs from './refs';

const STORAGE_KEY = 'theme';
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkBoxThemeToggle.addEventListener('click', onCheckBoxClick);

export default function onCheckBoxClick(e) {
  let themeValue = '';
  if (e.currentTarget.checked) {
    themeValue = theme.DARK;
    refs.body.classList.add(themeValue);
  } else {
    themeValue = theme.LIGHT;
    refs.body.classList.remove(theme.DARK);
  }
  localStorage.setItem(STORAGE_KEY, themeValue);
}

function savedThemeOnPageReload() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === theme.DARK) {
    refs.body.classList.add(savedTheme);
    refs.checkBoxThemeToggle.setAttribute('checked', true);
  }
}

savedThemeOnPageReload();
