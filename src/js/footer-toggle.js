import refs from './refs';

refs.footerToggleBtn.addEventListener('click', onFooterToggleBtnClick);

function onFooterToggleBtnClick(e) {
  if (refs.footerContainer.classList.contains('is-open')) {
    refs.footerContainer.classList.toggle('is-open');
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    scrollTo({
      top: height - innerHeight - 196,
      behavior: 'smooth',
    });
  } else {
    refs.footerContainer.classList.toggle('is-open');
    refs.footerContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }
}
