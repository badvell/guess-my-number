'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');
const gameScore = document.querySelector('.score');

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      gameScore.textContent = score;
    } else {
      displayMessage('You lost the game!');
      gameScore.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  gameScore.textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
});