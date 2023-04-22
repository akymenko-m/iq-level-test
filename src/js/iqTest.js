import { questions } from '../questionsData.js';
console.log(questions);

const test = document.querySelector('.test');
const iqTest = document.querySelector('.iq-test');
const nextBtn = document.querySelector('.next');

let curQuestion = 0;

iqTest.innerHTML = questions[curQuestion];

nextBtn.addEventListener('click', nextQuestion);

function nextQuestion() {
  curQuestion += 1;
  iqTest.innerHTML = questions[curQuestion];
  console.log(curQuestion);

  if (curQuestion === questions.length - 1) {
    nextBtn.classList.add('is-none');
  }
}

// questions.forEach(el => {
// })

// for (let i = 0; i <= questions.length; i += 1) {
//   questions[i];
// }
