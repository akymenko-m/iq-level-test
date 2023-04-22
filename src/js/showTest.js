'use strict';

const main = document.querySelector('.main-content');
// const startBtn = document.querySelectorAll('.start');
const test = document.querySelector('.test');
const footer = document.querySelector('.footer');

// console.log(startBtn);

main.addEventListener('click', startTest);

function startTest(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  main.classList.add('is-none');
  footer.classList.add('is-none');
  test.classList.remove('is-none');
}
