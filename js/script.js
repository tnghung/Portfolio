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
