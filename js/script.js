// ------- Turn page --------
const turnPageBtns = document.querySelectorAll('.page-change');

turnPageBtns.forEach((ele, index) => {
  ele.addEventListener('click', function (e) {
    const pageTurnId = this.getAttribute('data-page');
    if (!pageTurnId) return;

    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 'unset';
      }, 600);
    } else {
      pageTurn.classList.add('turn');

      // Page more after will get higher index
      pageTurn.style.zIndex = 20 - index;
    }
  });
});

const cover = document.querySelector('.cover.right');
const pages = document.querySelectorAll('.page-right.turn');

// Make the animation open book
setTimeout(() => {
  cover.classList.add('turn');
}, 2100);

setTimeout(() => {
  cover.style.zIndex = '-1';
}, 2800);

pages.forEach((ele, index) => {
  ele.style.zIndex = 20 - index;
});

pages.forEach((ele, index) => {
  setTimeout(() => {
    ele.classList.remove('turn');
    setTimeout(() => {
      ele.style.zIndex = 'unset';
    }, 600);
  }, (index + 1) * 200 + 2100);
});
