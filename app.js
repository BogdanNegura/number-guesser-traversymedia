/*
GAME FUNCTION:
    - Player must guess a number between a min and max
    - Player gets a certain amount of guesses
    - Notify player of guesses remaining
    - Notify the player of the correct answer if lose
    - Let player choose to play againe
*/

// Game values
let min = 1,
    max = 10,
    successfulNumber = 2,
    estimatedLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
      minNumber = document.querySelector('.min-num'),
      maxNumber = document.querySelector('.max-num'),
      estimateBtn = document.querySelector('#guess-btn'),
      estimateInput = document.querySelector('#guess-input')
      notice = document.querySelector('.message');

// Assign UI min and max
minNumber.textContent = min;
maxNumber.textContent = max;

// Listen for estimate(guess)

estimateBtn.addEventListener('click', function() {
    let estimate = parseInt(estimateInput.value);

    // validate
    if(isNaN(estimate) || estimate < min || estimate >max){
        setNotice(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(estimate === successfulNumber){
        // Disable input 
        estimateInput.disable = true;
        // Change border color to green
        estimateInput.style.borderColor = 'green';
        // Set message
        setNotice(`${successfulNumber} is correct, YOU WIN!`, 'green');
    } else {

    }
});

// Set notice(message)
function setNotice(msg, color){
    notice.style.color = color;
    notice.textContent = msg;
}
    