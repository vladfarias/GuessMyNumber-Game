'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    if (guess == ""){
        document.querySelector('.message').textContent = '⛔ No Number!';
    }

    if( guess === secretNumber){
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = '🎉 Correct number!';
        document.querySelector('.number').textContent = guess;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        };

    }else if(guess !== secretNumber){

        if(score > 1) {

            document.querySelector('.message').textContent = guess > secretNumber? '📈 Too high!': '📉 Too low';
            score--; 
            document.querySelector('.score').textContent = score;

        } else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.message').textContent = '👻 You lost the game!'
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.game-name').textContent = 'Perhaps next time!';
                


        }
    } 
 });

document.querySelector('.again').addEventListener('click', function(){
    // score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    document.querySelector('.game-name').textContent = 'Guess My Number!';
    
   

});

