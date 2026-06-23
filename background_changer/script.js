const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
    
    button.addEventListener("click", (e) =>{
    const body = document.querySelector("body");
    body.style.backgroundColor = e.target.id
    })
    
});

