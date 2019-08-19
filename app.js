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
        // Game Over - won
        gameOver(true, `${successfulNumber} is correct, You Win`);

    } else {
        // Wrong number
        estimatedLeft -= 1;

        if(estimatedLeft === 0){
            // Game Over -lost
            gameOver(false, `Game Over, you lost. The correct number was ${successfulNumber}`);
            // Disable input 
            estimateInput.disable = true;

            // Change border color
            estimateInput.style.borderColor = 'red';
            
            // Set message
            setNotice(`Game Over, you lost. The correct number was ${successfulNumber}`, 'red');

        } else{
            // Game continue - answer wrong

            // Change border color
            estimateInput.style.borderColor = 'red';

            // Clear the input
            estimateInput.value = '';

            // Tell user its the wrong number
            setNotice(`${estimate} is not correct, ${estimatedLeft} guesses left`, 'red')
        } 
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input 
    estimateInput.disable = true;
    // Change border color to green
    estimateInput.style.borderColor = color;
    // Set text color
    notice.style.color = color;
    // Set message
    setNotice(msg);
}

// Set notice(message)
function setNotice(msg, color){
    notice.style.color = color;
    notice.textContent = msg;
}
    