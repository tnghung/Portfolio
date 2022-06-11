// ------- Turn page --------
const turnPageBtns = document.querySelectorAll('.page-change');

turnPageBtns.forEach((ele, index) => {
  ele.addEventListener('click', function (e) {
    const pageTurnId = this.getAttribute('data-page');
    if (!pageTurnId) return;

    const pageTurn = document.getElementById(pageTurnId);
    pageTurn.classList.toggle('turn');
  });
});
