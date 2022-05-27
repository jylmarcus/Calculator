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
    if(b == 0){
        errorFlag = 1;
        return `To infinity and beyond!`;
    }
    return a/b;
}

function operate (operator){
    if(errorFlag == 1){
        return;
    }

    if(operator == `=`){
        switch (prevOperator[0].innerHTML) {
            case `+`:
                prevNum[0].innerHTML += ` ${prevOperator[0].innerHTML} ${displayNum[0].innerHTML}`;
                firstNum = String(add(Number(firstNum),Number(displayNum[0].innerHTML)));
                prevOperator[0].innerHTML = "";
                operatorFlag = 0;
                displayNum[0].innerHTML = firstNum;
                newNum = 1;
                return;
            case `-`:
                prevNum[0].innerHTML += ` ${prevOperator[0].innerHTML} ${displayNum[0].innerHTML}`;
                firstNum = String(subtract(Number(firstNum),Number(displayNum[0].innerHTML)));
                prevOperator[0].innerHTML = "";
                operatorFlag = 0;
                displayNum[0].innerHTML = firstNum;
                newNum = 1;
                return;
            case `*`:
                prevNum[0].innerHTML += ` ${prevOperator[0].innerHTML} ${displayNum[0].innerHTML}`;
                firstNum = String(multiply(Number(firstNum),Number(displayNum[0].innerHTML)));
                prevOperator[0].innerHTML = "";
                operatorFlag = 0;
                displayNum[0].innerHTML = firstNum;
                newNum = 1;
                return;
            case `/`:
                prevNum[0].innerHTML += ` ${prevOperator[0].innerHTML} ${displayNum[0].innerHTML}`;
                firstNum = String(divide(Number(firstNum),Number(displayNum[0].innerHTML)));
                prevOperator[0].innerHTML = "";
                operatorFlag = 0;
                displayNum[0].innerHTML = firstNum;
                newNum = 1;
                return;
            case ``:
                prevNum[0].innerHTML = `${displayNum[0].innerHTML} ${operator}`;
                newNum = 1;
                return;
            default:
                return;
        }
    }

    if(operatorFlag == 0){
        prevNum[0].innerHTML = displayNum[0].innerHTML;
        firstNum = displayNum[0].innerHTML;
        displayNum[0].innerHTML = "0";
        prevOperator[0].innerHTML = operator;
        operatorFlag = 1;
        return;
    }

    switch (prevOperator[0].innerHTML) {
        case `+`:
            prevNum[0].innerHTML += ` ${prevOperator[0].innerHTML} ${displayNum[0].innerHTML}`;
            firstNum = String(add(Number(firstNum),Number(displayNum[0].innerHTML)));
            console.log(firstNum);
            prevOperator[0].innerHTML = operator;
            displayNum[0].innerHTML = "0";
            return;
        case `-`:
            prevNum[0].innerHTML += ` ${prevOperator[0].innerHTML} ${displayNum[0].innerHTML}`;
            firstNum = String(subtract(Number(firstNum),Number(displayNum[0].innerHTML)));
            console.log(firstNum);
            prevOperator[0].innerHTML = operator;
            displayNum[0].innerHTML = "0";
            return;
        case `*`:
            prevNum[0].innerHTML += ` ${prevOperator[0].innerHTML} ${displayNum[0].innerHTML}`;
            firstNum = String(multiply(Number(firstNum),Number(displayNum[0].innerHTML)));
            console.log(firstNum);
            prevOperator[0].innerHTML = operator;
            displayNum[0].innerHTML = "0";
            return;
        case `/`:
            prevNum[0].innerHTML += ` ${prevOperator[0].innerHTML} ${displayNum[0].innerHTML}`;
            firstNum = String(divide(Number(firstNum),Number(displayNum[0].innerHTML)));
            console.log(firstNum);
            if (errorFlag == 1){
                displayNum[0].innerHTML = firstNum;
                return;
            }
            prevOperator[0].innerHTML = operator;
            displayNum[0].innerHTML = "0";
            return;
    }

}

function updateDisplay (num) {
    if (num == "clear") {
        displayNum[0].innerHTML = "0";
        prevNum[0].innerHTML = "";
        prevOperator[0].innerHTML = "";
        operatorFlag = 0;
        errorFlag = 0;
        return;
    }

    if ((displayNum[0].innerHTML == "0"|| newNum == 1 ) && errorFlag == 0) {
        if(num == "."){
            displayNum[0].innerHTML = `0${num}`;
            newNum = 0;
            return;
        }
        displayNum[0].innerHTML = num;
        newNum = 0;
        return;
    }

    if (errorFlag == 1) {
        return;
    }

    if (displayNum[0].innerHTML.includes(".") && num == "."){
        return;
    }

    displayNum[0].innerHTML += num;
    return;
}

let displayNum = document.getElementsByClassName("displayNum");
let prevNum = document.getElementsByClassName("prevNum");
let prevOperator = document.getElementsByClassName("prevOperator");
let numButtons = document.querySelectorAll(".numButton");
let operatorButtons = document.querySelectorAll(".operatorButton");
let operatorFlag = 0;
let firstNum = "";
let newNum = 0;
let errorFlag = 0;

numButtons.forEach(button => button.addEventListener("click", function(){
    updateDisplay(button.id);
}));
operatorButtons.forEach(button => button.addEventListener("click", function(){
    operate(button.id);
}));