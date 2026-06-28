let randomValue= parseInt(Math.random()*100+1)

const submit = document.getElementById("subt");
const guessValue = document.getElementById("guessField");
const displayMsg = document.querySelector(".lowOrHi")
const guesses = document.querySelector(".guesses")
const numberOfTurn = document.querySelector(".lastResult")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

const clickSound = new Audio('click.mp3');

let playGame = true

let totalTurn = 10;
if (playGame){
  submit.addEventListener("click", (e)=>{
    clickSound.currentTime = 0;
    clickSound.play();
    e.preventDefault()
    const inputValue = parseInt(guessValue.value);
    validateInput(inputValue)

  })
}
function validateInput(input){
  if ( input < 1 || input > 100 || isNaN(input))
  {
    alert (`the enter value is not valid`);

  }
  else {
    if ( totalTurn > 0){
      guessValue.value = ''
      totalTurn--;
      displayGuess(input);
      displayturn(totalTurn)
      checkValue(input);
    }
    else{
      endGame();
    }
  }
}

function checkValue(input){
  if ( input === randomValue)
  {
    displayMessage(`You guessed it rigth`);
    endGame();

  }
  else if (totalTurn === 0){
    displayMessage(`Game Over! The correct number was ${randomValue}`);
    endGame();
  }
  else if ( input > randomValue)
  {
    displayMessage(`the value is very high`)

  }
  else {
    displayMessage (`the value is very low`)
  }

}
function displayMessage(message){
  displayMsg.innerHTML = `<h2>${message}</h2>`;
}
function displayGuess (input){
  guesses.innerHTML += `${input}  `;


}
function displayturn(turn){
  numberOfTurn.innerHTML = `${turn}`
}
function endGame(){
  guessValue.value = ''
  guessValue.setAttribute("disabled", "");
  p.classList.add('button');
  p.innerHTML = `<span id="newGame" style="cursor: pointer; display: block; width: 100%; height: 100%; line-height: 50px;">Start New Game</span>`;  
  p.style = "backgroundColor: green";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener("click", (e)=>{
    clickSound.currentTime = 0;
    clickSound.play();
    displayMsg.innerHTML = "";
    randomValue = parseInt(Math.random() * 100 + 1);
    totalTurn = 10;
    guesses.innerHTML = '';
    numberOfTurn.innerHTML =`${totalTurn}`
    guessValue.removeAttribute('disabled');
    startOver.removeChild(p);
  
    playGame = true

  })
}
