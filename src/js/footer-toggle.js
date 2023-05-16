const footerToggleBtn = document.querySelector('.footer-toggle-btn');
const footerContainer = document.querySelector('.footer');

footerToggleBtn.addEventListener('click', onFooterToggleBtnClick);

function onFooterToggleBtnClick(e) {
  if (footerContainer.classList.contains('is-open')) {
    footerContainer.classList.toggle('is-open');
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
    footerContainer.classList.toggle('is-open');
    footerContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }
}

// function onFooterToggleBtnClick(e) {
//   console.log(e);
//   footerContainer.classList.toggle('is-open');
//   footerContainer.scrollIntoView({
//     behavior: 'smooth',
//     block: 'end',
//   });
// }
