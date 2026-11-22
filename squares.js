let squareArea;
let topZ = 0;

window.onload = function(){
    squareArea = document.querySelector("#squarearea");
    let squareCount = parseInt(Math.random()*21)+30;

    for (let i = 0; i < squareCount; i++){
        addSquare();
    }

    let addButton = document.querySelector("#add");
    addButton.addEventListener("click", addSquare);

    let changeButton = document.querySelector("#change");
    changeButton.addEventListener("click", changeColors);
}

function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor = getRandomColor();
    square.style.top =parseInt(Math.random()*(300-50))+"px";
    square.style.left =parseInt(Math.random()*(700-50))+"px";
    topZ++;
    square.style.zIndex = topZ;
    square.onclick = squareClick;
    squareArea.append(square);
}

function squareClick(){
    if (this.style.zIndex == topZ){
        this.remove();
    }
    else{
        topZ++;
        this.style.zIndex = topZ;
    }
}

function changeColors(){
    let squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
}

function getRandomColor(){
    let possibleLetters ="0123456789ABCDEF";
    let color = "#";
    for (let i= 0; i<6; i++){
        let position = parseInt(Math.random()*possibleLetters.length)
        color+=possibleLetters.charAt(position);
    }
    return color;
}