if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.onbeforeunload = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
