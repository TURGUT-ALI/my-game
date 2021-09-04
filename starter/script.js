'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 23;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};



let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.input-number').value);
  console.log(guess, typeof guess);

if (!guess) {
    displayMessage('Sorry not a number');
  } else if (guess === secretNumber) {
    displayMessage('🤗 correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector(".number").style.backgroundColor = 'yellow';
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
  }else if (guess > secretNumber){
    if(score > 1){
      displayMessage("😒too high");
      score--;
      document.querySelector('.score').textContent = score;

    }else{
      displayMessage('😆you lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'brown';

    }
   
    


  }else if(guess < secretNumber){
    if(score > 1){
      displayMessage("😢too low");
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      displayMessage('😆you lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'brown';
    }

    
  }
});

document.querySelector('.again').addEventListener('click' , function(){
  
  
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = 'rgb(225, 216, 251)';
  document.querySelector('.number').style.width = "15rem";
  document.querySelector('.number').textContent = "?";
  document.querySelector('.number').style.backgroundColor= "rgb(241, 195, 195)";
  document.querySelector('.input-number').value = '';
  displayMessage('start guessing...')



})
