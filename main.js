//DISPLAY
let displayValue = document.getElementById("displayValue");
let tempDisplayValue = document.getElementById("tempDisplayValue");

//BUTTONS
let numberButtons = document.querySelectorAll(".digit");
let clearButton = document.getElementById("clear");
let reverseSignButton = document.getElementById("reverse");
let equalButton = document.getElementById("equal");

let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let modulusButton = document.getElementById("modulus");

//RANDOM VARIABLES
let screenContent, previousValue, nextValue, currentAnswer, newAns;
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

        //NEW NUMBER CONTAINER
        } else if (valueChange == true) {
            displayValue.style.color = "gray";

            tempDisplayValue.textContent += e.target.textContent;
            nextValue = parseFloat(tempDisplayValue.textContent);
            newAns = (operate(previousValue, operationSelect, nextValue));
            currentAnswer = newAns;
        }
    });
});

// (AC) BUTTON
clearButton.addEventListener("click", function(e) {
    displayValue.textContent = "";
    tempDisplayValue.textContent = "";
    displayValue.style.color = "white";

    nextValue = 0;
    previousValue = 0;
    clickCount = 0;
    valueChange = false;
});

// (+/-) BUTTON
reverseSignButton.addEventListener("click", function(e) {
    displayValue.textContent *= -1;
    previousValue = previousValue * -1;

    //CALCULATES ANSWER IF EQUATION EXISTS, THEN TURNS IT INTO NEGATIVE
    if (valueChange == true) {
        tempDisplayValue.textContent = "";
        displayValue.style.color = "white";
        displayValue.textContent = newAns * -1;
        newAns = newAns * -1;
    }
});

// (+) BUTTON
plusButton.addEventListener("click", function(e) {
    valueChange = true;
    displayValue.textContent += "+";
    operationSelect = '+';
    clickCount++;

    if (clickCount > 1) {
        currentAnswer = newAns;
        tempDisplayValue.textContent = "";
        displayValue.textContent = currentAnswer + "+";

        previousValue = currentAnswer;
        nextValue = 0;
    }

});

// (-) BUTTON
minusButton.addEventListener("click", function(e) {
    valueChange = true;
    displayValue.textContent += "-";
    operationSelect = '-';
    clickCount++;

    if (clickCount > 1) {
        currentAnswer = newAns;
        tempDisplayValue.textContent = "";
        displayValue.textContent = currentAnswer + "-";

        previousValue = currentAnswer;
        nextValue = 0;
    }
});

// (×) BUTTON
multiplyButton.addEventListener("click", function(e) {
    valueChange = true;
    displayValue.textContent += "×";
    operationSelect = '*';
    clickCount++;

    if (clickCount > 1) {
        currentAnswer = newAns;
        tempDisplayValue.textContent = "";
        displayValue.textContent = currentAnswer + "×";
        tempDisplayValue.textContent = "";

        previousValue = currentAnswer;
        nextValue = 0;
    }
});

// (÷) BUTTON
divideButton.addEventListener("click", function(e) {
    valueChange = true;
    displayValue.textContent += "÷";
    tempDisplayValue.textContent = "";
    operationSelect = '/';
    clickCount++;
    
    if (clickCount > 1) {
        currentAnswer = newAns;
        tempDisplayValue.textContent = "";
        displayValue.textContent = currentAnswer + "÷";

        previousValue = currentAnswer;
        nextValue = 0;
    }
});

// (%) BUTTON
modulusButton.addEventListener("click", function(e) {
    valueChange = true;
    displayValue.textContent += "%";
    operationSelect = '%';
    clickCount++;
    
    if (clickCount > 1) {
        currentAnswer = newAns;
        tempDisplayValue.textContent = "";
        displayValue.textContent = currentAnswer + "%";

        previousValue = currentAnswer;
        nextValue = 0;
    }
});

// (=) BUTTON
equalButton.addEventListener("click", function(e) {
    displayValue.style.color = "white";
    tempDisplayValue.textContent = "";

    clickCount = 0;
    displayValue.textContent = newAns;
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
    var result;

    if (operator == '+') {
        result = add(a, b);
    } else if (operator == '-') {
        result = subtract(a, b);
    } else if (operator == '*') {
        result = multiply(a, b);
    } else if (operator == '/') {
        result = divide(a, b);
    } else if (operator == '%') {
        result = modulus(a, b)
    } else {
        result = "ERROR!";
    }
    
    //INCLUDES DECIMAL POINT IF CONSISTS
    return Number.isInteger(result) ? result : result.toFixed(2);
}