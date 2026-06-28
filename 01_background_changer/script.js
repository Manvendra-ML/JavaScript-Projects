const buttons = document.querySelectorAll('.button')
const clickSound = new Audio("../02_guess_number/click.mp3");

buttons.forEach((button) => {
    
    button.addEventListener("click", (e) =>{
        clickSound.currentTime = 0;
        clickSound.play();
        const body = document.querySelector("body");
        body.style.backgroundColor = e.target.id
    })
    
});

