let numSquares = 6;
//  set up the color. Initially we setup hardcore values
let colors = generateRandomColor(numSquares);
// find all elements with class "square" 
let squares = document.querySelectorAll(".square");
// define the color you want to find
let pickedColor = pickColor();
// Match defined color with the display in H1 by finding spam with special ID
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
// pick h1 to manage the color
let h1 = document.querySelector("h1");
// pick reset button to work later on
let resetButton = document.querySelector("#reset");
//Message alert for right or wrong answer
let messageDisplay = document.querySelector("#message");
// pick hard or easy buttons
// let easyBtn = document.querySelector("#easyBtn")
// let hardBtn = document.querySelector("#hardBtn")
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
//mode buttons event listener
    for (let i=0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
           modeButtons[0].classList.remove("selected");
           modeButtons[1].classList.remove("selected");
           this.classList.add("selected");
           //  itinary operator? equal to the one below with if statement// EASY must be in capital letters
           this.textContent ==="EASY" ? numSquares= 3: numSquares= 6;
           // if( this.textContent === "EASY"){
           //     numSquares = 3;
           // } else {
           //     numSquares = 6;
           // };
           reset ();
       });
   }
// color thig=ng
    for (let i =0; i< squares.length; i++){
        // give all suares the colors we set up originally
        squares[i].style.backgroundColor = colors[i];
        // add click listener to square
        squares[i].addEventListener("click", function(){
            // grab color of picked square
            let clickedColor = this.style.backgroundColor;
            //compare color to picked Color
            if (clickedColor===pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
    reset();
}



function reset(){
    colors = generateRandomColor(numSquares);
    // pick a new randm color from the array
    pickedColor = pickColor();
    // change colorDisplat to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent ="New Color";
    messageDisplay.textContent= "";
    // give all the squires the same color as new ones
    for (let i = 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display ="block";
            squares[i].style.backgroundColor = colors [i];
        } else {
            squares[i].style.display ="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// ************ORIGINAL CODE FOR EASY AND HARD BUTTON by ID******************
// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares =3;
//     colors=generateRandomColor(numSquares);
//     pickedColor= pickColor();
//     colorDisplay.textContent = pickedColor;
//     // hide the remaining 3 blocks
//     for(let i =0; i <squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors [i];
//         } else {
//             squares[i].style.display ="none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors=generateRandomColor(numSquares);
//     pickedColor= pickColor();
//     colorDisplay.textContent = pickedColor;
//     // hide the remaining 3 blocks
//     for(let i =0; i <squares.length; i++){
//             squares[i].style.backgroundColor = colors [i];
//             squares[i].style.display ="block";
//     }
// })
// ***************************END OF ORIGINAL CODE******************************
resetButton.addEventListener("click", function(){
    reset();
});




// create a function to change a color to match to the correct one
function changeColor(color){
    for(let i=0; i < squares.length; i++){
        //change color of every square to match given color
        squares[i].style.backgroundColor = color;
    }
}

// function to help with random color pick. 
//[Color] random will provide with number between 0 and 1 but never a whole number, so to get a solid number we * by length
function pickColor(){
   var random = Math.floor(Math.random()* colors.length);
   return colors[random];
}

function generateRandomColor(num){
    let arr =[]
    for ( let i = 0; i< num; i++){
        arr.push(randomColor())
    }
    return arr;
}

// function fro random color for the array
function randomColor(){
    // pick a number from 0 to 255
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    // write in rgb format
    return "rgb(" + r +", " + g + ", " + b + ")";
}