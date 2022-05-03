a = document.getElementsByClassName("colorbutton"); // get all buttons
gameboy = document.querySelector(".gameBoyBody"); // get the gameboy body

for(i = 0; i < a.length; i++){ // loop through all buttons
    a[i].addEventListener("click", function(){ // on each button, listen for the click event
      gameboy.classList = "gameBoyBody"; // reset class
      gameboy.classList.add(this.getAttribute("data-color")); // get the data attribute from the button and apply to the gameboy body
    });
}
