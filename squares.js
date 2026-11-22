let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random()*21)+30;
function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor = getRandomColor();
    square.style.top =parseInt(Math.random()*(300-50))+"px";
    square.style.left =parseInt(Math.random()*(700-50))+"px";
    squareArea.append(square);
}
for (let i = 0; i < squareCount; i++){
    addSquare();
}
let addButton = document.querySelector("#add");
addButton.addEventListener("click", addSquare);

function getRandomColor(){
    let possibleLetters ="0123456789ABCDEF";
    let color = "#";
    for (let i= 0; i<6; i++){
        let position = parseInt(Math.random()*possibleLetters.length)
        color+=possibleLetters.charAt(position);
    }
    return color;
}
