
let displayValue = document.getElementById("displayValue");
let valueChange = false;

let tempValue = '';
let previousValue;

let operationSelect = '';

let tempValue2 = '';
let nextValue;

let tempAns;
let currentAns;

let clickCount = 0; //OPERATOR BUTTON CLICK COUNT

//BUTTONS
let clearButton = document.getElementById("clear");
let reverseSignButton = document.getElementById("reverse");
let equalButton = document.getElementById("equal");

let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let modulusButton = document.getElementById("modulus");

let numberButtons = document.querySelectorAll(".digit");



//NUMBER BUTTON ACTION
numberButtons.forEach(function(button) {

    button.addEventListener("click", function(e) {

        //OLD NUMBER CONTAINER
        if (valueChange == false) {

            displayValue.textContent += e.target.textContent;
            tempValue = displayValue.textContent;
            previousValue = parseFloat(tempValue);

            //DEBUG
            console.log("P Value: " + previousValue);
            console.log("Next Value: " + nextValue);
        
        //NEW NUMBER CONTAINER
        } else if (valueChange == true) {

            tempValue2 += e.target.textContent;
            nextValue = parseFloat(tempValue2);
            displayValue.textContent += e.target.textContent;

            //DEBUG
            console.log("P Value: " + previousValue);
            console.log("Next Value: " + nextValue);
        }
    });
});



//CLEAR BUTTON ACTION
clearButton.addEventListener("click", function(e) {
    console.log("------CLEAR------");

    displayValue.textContent = "";
    nextValue = 0;
    valueChange = false;
    previousValue = 0;
    clickCount = 0;

    console.log("Pr Value: " + previousValue);
    console.log("Next Value: " + nextValue);
});

//REVERSE SIGN BUTTON ACTION
reverseSignButton.addEventListener("click", function(e) {
    displayValue.textContent = displayValue.textContent * -1;
    previousValue = previousValue * -1;
});

// (+) BUTTON
plusButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount += 1;
    displayValue.textContent += "+";
    operationSelect = '+';
    
    if (clickCount > 1) {

        currentAns = operate(previousValue, operationSelect, nextValue);
        displayValue.textContent = currentAns + "+";

        previousValue = currentAns;
        tempValue2 = 0;
    }

    console.log(clickCount);
});

// (-) BUTTON
minusButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount += 1;
    displayValue.textContent += "-";
    operationSelect = '-';
    
    if (clickCount > 1) {

        currentAns = operate(previousValue, operationSelect, nextValue);
        displayValue.textContent = currentAns + "-";

        previousValue = currentAns;
        tempValue2 = 0;
    }
});

// (×) BUTTON
multiplyButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount += 1;
    displayValue.textContent += "×";
    operationSelect = '*';

    if (clickCount > 1) {

        currentAns = operate(previousValue, operationSelect, nextValue);
        displayValue.textContent = currentAns + "×";

        previousValue = currentAns;
        tempValue2 = 0;

        console.log("previOUS val: " + previousValue);
    }

    console.log(clickCount);
});

// (÷) BUTTON
divideButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount += 1;
    displayValue.textContent += "÷";
    operationSelect = '/';
    
    if (clickCount > 1) {

        currentAns = operate(previousValue, operationSelect, nextValue);
        displayValue.textContent = currentAns + "÷";

        previousValue = currentAns;
        tempValue2 = 0;
        nextValue = 0;

        console.log("Click Count: " + clickCount);
        console.log("P Value: " + previousValue);
        console.log("Next Value: " + nextValue);
    }

    console.log(operationSelect);
});

// (%) BUTTON
modulusButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount += 1;
    displayValue.textContent += "%";
    operationSelect = '%';
    
    if (clickCount > 1) {

        currentAns = operate(previousValue, operationSelect, nextValue);
        displayValue.textContent = currentAns + "%";

        previousValue = currentAns;
        tempValue2 = 0;
        nextValue = 0;

        console.log("Click Count: " + clickCount);
        console.log("P Value: " + previousValue);
        console.log("Next Value: " + nextValue);
    }
    console.log(operationSelect);
});

// (=) BUTTON
equalButton.addEventListener("click", function(e) {
    clickCount = 0;
    currentAns = operate(previousValue, operationSelect, nextValue);
    displayValue.textContent = currentAns;

    previousValue = currentAns;
    tempValue2 = 0;
    nextValue = 0;

    console.log("-----(Answer)-----> " + currentAns);
    console.log("P Value: " + previousValue);
    console.log("Next Value: " + nextValue);
});



//OPERATION FUNCTIONS
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function modulus(a, b) {
    return a % b;
}

//OPERATE
function operate(num1, operation, num2) {

    if (operation == '+') {
        return add(num1, num2);
    } else if (operation == '-') {
        return subtract(num1, num2);
    } else if (operation == '*') {
        return multiply(num1, num2);
    } else if (operation == '/') {
        return divide(num1, num2);
    } else if (operation == '%') {
        return modulus(num1, num2)
    } else {
        return "ERROR!";
    }
}