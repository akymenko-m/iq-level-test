'use strict';

const refs = {
  main: document.querySelector('.main-content'),
  test: document.querySelector('.test'),
  header: document.querySelector('.header__subcontainer'),
};

refs.main.addEventListener('click', startTest);

function startTest(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  refs.main.classList.add('is-none');
  refs.test.classList.remove('is-none');
  refs.header.classList.remove('is-hidden');
}
