let displayValue = document.getElementById("displayValue");

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

//RANDOM VARIABLES
let previousValue, nextValue, currentAnswer, newAns;
let operationSelect = '';
let valueChange = false;
let clickCount = 0;

//NUMBER BUTTONS ACTION
numberButtons.forEach(function(button) {

    button.addEventListener("click", function(e) {

        //OLD NUMBER CONTAINER
        if (valueChange == false) {
            displayValue.textContent += e.target.textContent;
            previousValue = parseFloat(displayValue.textContent);
            
            console.log("P value: " + previousValue);
        
        //NEW NUMBER CONTAINER
        } else if (valueChange == true) {
            displayValue.textContent += e.target.textContent;
            nextValue = parseFloat((nextValue || 0) + e.target.textContent);

            console.log("Next value: " + nextValue);
            newAns = (operate(previousValue, operationSelect, nextValue));
            console.log(newAns);
        }
    });
});



// (C) BUTTON
clearButton.addEventListener("click", function(e) {
    displayValue.textContent = "";
    nextValue = 0;
    valueChange = false;
    previousValue = 0;
    clickCount = 0;
});

// (+/-) BUTTON
reverseSignButton.addEventListener("click", function(e) {
    displayValue.textContent = displayValue.textContent * -1;
    previousValue = previousValue * -1;
});

// (+) BUTTON
plusButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount++;
    displayValue.textContent += "+";
    operationSelect = '+';

    console.log("(" + operationSelect + ")" + " " + clickCount);

    if (clickCount > 1) {
        currentAnswer = newAns;
        displayValue.textContent = currentAnswer + "+";

        previousValue = currentAnswer;
        nextValue = 0;
    }
});

// (-) BUTTON
minusButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount++;
    displayValue.textContent += "-";
    operationSelect = '-';

    console.log("(" + operationSelect + ")" + " " + clickCount);

    if (clickCount > 1) {
        currentAnswer = newAns;
        displayValue.textContent = currentAnswer + "-";

        previousValue = currentAnswer;
        nextValue = 0;
    }
    console.log("P. value: " + previousValue);
    console.log("Next value: " + nextValue);
    console.log(clickCount);
});

// (×) BUTTON
multiplyButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount++;
    displayValue.textContent += "×";
    operationSelect = '*';

    if (clickCount > 1) {
        currentAnswer = newAns;
        displayValue.textContent = currentAnswer + "×";

        previousValue = currentAnswer;
        nextValue = 0;
    }
});

// (÷) BUTTON
divideButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount++;
    displayValue.textContent += "÷";
    operationSelect = '/';
    
    if (clickCount > 1) {
        currentAnswer = newAns;
        displayValue.textContent = currentAnswer + "÷";

        previousValue = currentAnswer;
        nextValue = 0;
    }
});

// (%) BUTTON
modulusButton.addEventListener("click", function(e) {
    valueChange = true;
    clickCount++;
    displayValue.textContent += "%";
    operationSelect = '%';
    
    if (clickCount > 1) {

        currentAnswer = operate(previousValue, operationSelect, nextValue);
        displayValue.textContent = currentAnswer + "%";

        previousValue = currentAnswer;
        nextValue = 0;
    }
});

// (=) BUTTON
equalButton.addEventListener("click", function(e) {
    clickCount = 0;
    currentAnswer = operate(previousValue, operationSelect, nextValue);
    displayValue.textContent = currentAnswer;

    previousValue = currentAnswer;
    nextValue = 0;
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
function operate(a, operator, b) {

    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else if (operator == '%') {
        return modulus(a, b)
    } else {
        return "ERROR!";
    }
}