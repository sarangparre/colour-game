var numSquares = 6;
var colors = generateRandomColor(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".squares");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



        colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){

        squares[i].style.background = colors[i];

        squares[i].addEventListener("click", function(){
        
        var clickedColor = this.style.background;
    
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            messageDisplay.classList.add("greenColor");
            changeColor(pickedColor);
            h1.style.background = pickedColor;
            resetButton.textContent = "Play again?";
                
        }else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Wrong!";
            messageDisplay.classList.add("redColor");
        }
    
        });

    }

function changeColor(color){
    for(var i= 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
colors = generateRandomColor(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
this.textContent = "New Colors"
messageDisplay.textContent = "";
messageDisplay.classList.remove("greenColor");
for(var i = 0; i < squares.length; i++){

    squares[i].style.background = colors[i];
}
h1.style.background = "steelblue";

});

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    messageDisplay.classList.remove("greenColor");
    for(var i  = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    messageDisplay.classList.remove("greenColor");
    for(var i  = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
    
            squares[i].style.display = "block";
        
    }
    h1.style.background = "steelblue";
});