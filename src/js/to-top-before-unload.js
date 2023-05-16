window.onbeforeunload = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
