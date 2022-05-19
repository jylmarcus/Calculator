function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply (a,b){
    return a * b;
}

function divide (a,b){
    return a/b;
}

function operate (a, operator, b){
    switch (operator) {
        case `+`:
            return add(a,b);
            break;
        case `-`:
            return subtract(a,b);
            break;
        case `*`:
            return multiply(a,b);
            break;
        case `/`:
            return divide(a,b);
            break;
    }
}

function updateDisplay (num) {
    if (displayNum[0].innerHTML == "0") {
        displayNum[0].innerHTML = num;
        return;
    }

    if (num == "clear") {
        displayNum[0].innerHTML = 0;
        return;
    }

    displayNum[0].innerHTML += num;
    return;
}

let displayNum = document.getElementsByClassName("display-num");
let buttons = document.querySelectorAll(".numButton");
console.log(displayNum);
buttons.forEach(button => button.addEventListener("click", function(){
    updateDisplay(button.id);
}));
console.log(displayNum);