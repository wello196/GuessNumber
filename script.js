'use strict';
//generate random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');

checkBtn.addEventListener('click', function () {
  if (guess.value == randomNumber) {
    if (score > highscore) {
      highscore = score;
      highscoreText.textContent = score;
    }
    message.textContent = 'Correct Number!!!';
    document.body.style.backgroundColor = 'green';
    number.style.width = '30rem';
    number.textContent = randomNumber;
  } else if (!guess.value) message.textContent = 'Please enter any Number';
  else {
    guess.value > randomNumber
      ? (message.textContent = 'Number is too High!')
      : (message.textContent = 'Number is too Low!');
    score--;
    scoreText.textContent = score;

    if (score <= 0) {
      document.body.style.backgroundColor = 'darkred';
      scoreText.textContent = 0;
      number.style.width = '30rem';
      number.textContent = randomNumber;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  scoreText.textContent = score;
  document.body.style.backgroundColor = '#222';
  number.textContent = '?';
  number.style.width = '15rem';
  message.textContent = 'Start guessing...';
  guess.value = '';
});
