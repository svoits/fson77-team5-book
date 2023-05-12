let loadedWindowWidth = window.innerWidth;

addEventListener('resize', onWindowResize);

function onWindowResize(e) {
  if (
    (window.innerWidth > 767 && loadedWindowWidth < 768) ||
    (window.innerWidth < 768 && loadedWindowWidth > 767) ||
    (window.innerWidth > 1439 && loadedWindowWidth < 1440) ||
    (window.innerWidth < 1440 && loadedWindowWidth > 1439)
  ) {
    location.reload();
  }
}
