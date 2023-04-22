'use strict';

import { questions } from '../questionsData.js';
// console.log(questions);

const dataResult = {};

const test = document.querySelector('.test');
const iqTest = document.querySelector('.iq-test__list');
const form = document.querySelector('.iq-test');
const nextBtn = document.querySelector('.test__btn-next');
const progressBar = document.querySelector('.progress');
// const label = document.querySelector('.iq-test__label');

let size = 100 / (questions.length + 1);
progressBar.style.width = `${size}%`;

let curQuestion = 0;

iqTest.innerHTML = questions[curQuestion];

form.addEventListener('submit', nextQuestion);
form.addEventListener('change', getValue);

function nextQuestion(event) {
  event.preventDefault();

  if (curQuestion === questions.length - 1) {
    // nextBtn.classList.add('is-none');
    nextBtn.remove();
  }

  curQuestion += 1;
  iqTest.innerHTML = questions[curQuestion];
  size += 100 / (questions.length + 1);
  progressBar.style.width = `${size}%`;
  // console.log('curQuestion', curQuestion);
  // console.log('questions.length', questions.length - 1);

  nextBtn.setAttribute('disabled', 'disabled');
}

let curValue = null;

function getValue(event) {
  if (event.target.hasAttribute('data-color')) {
    nextBtn.removeAttribute('disabled');
    dataResult[event.target.name] = event.target.value;
    console.log(dataResult);
    return;
  }

  if (curValue !== null && curValue !== event.target) {
    curValue.parentNode.style.backgroundColor = 'rgba(242, 243, 243, 0.15)';
    curValue.parentNode.style.color = '#ffffff';
  }

  if (event.target.checked) {
    nextBtn.removeAttribute('disabled');
    dataResult[event.target.name] = event.target.value;
    event.target.parentNode.style.backgroundColor = '#FFC700';
    event.target.parentNode.style.color = '#272727';
  }

  curValue = event.target;

  console.log(dataResult);
}

// const image = document.querySelector('.iq-test__image');
// image.setAttribute('src', './images/feature-bg.jpg');

// const color = document.querySelectorAll('.iq-test__label--color');
// color.forEach(el => {});
// questions.forEach(el => {
// })

// for (let i = 0; i <= questions.length; i += 1) {
//   questions[i];
// }
