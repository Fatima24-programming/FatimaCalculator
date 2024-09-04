
let num1 = "";
let num2 = "";
let operator = "";
let isOperatorSelected = false;
let isEqualClicked = false;

const numbers = document.querySelectorAll(".numbers .btn:not(.clear, #clearone)");
const addition = document.getElementById("addition");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const clearOne = document.getElementById("clearone");
const display = document.getElementById("display");

numbers.forEach(function(number) {
    number.addEventListener("click", function(event) {
        if (isEqualClicked) {
            clearDisplay();
        }
        if (!isOperatorSelected) {
            num1 += event.target.innerText;
        } else {
            num2 += event.target.innerText;
        }
        display.innerText = `${num1} ${operator} ${num2}`;
    });
});

function setOperator(op) {
    if (num1 !== "" && !isOperatorSelected) {
        isOperatorSelected = true;
        operator = op;
        display.innerText = `${num1} ${operator} ${num2}`;
    } else if (isOperatorSelected && num2 !== "") {
        equal.click(); 
        operator = op; 
        num2 = "";
        display.innerText = `${num1} ${operator} ${num2}`;
    }
}

addition.addEventListener("click", function() {
    setOperator("+");
});

subtract.addEventListener("click", function() {
    setOperator("-");
});

multiply.addEventListener("click", function() {
    setOperator("*");
});

division.addEventListener("click", function() {
    setOperator("/");
});

function clearDisplay() {
    num1 = "";
    num2 = "";
    operator = "";
    isOperatorSelected = false;
    isEqualClicked = false;
    display.innerText = "";
}

clear.addEventListener("click", clearDisplay);

equal.addEventListener("click", function() {
    if (num1 !== "" && num2 !== "" && operator !== "") {
        let result = 0;
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        switch (operator) {
            case "+":
                result = n1 + n2;
                break;
            case "-":
                result = n1 - n2;
                break;
            case "*":
                result = n1 * n2;
                break;
            case "/":
                result = n1 / n2;
                break;
        }

        display.innerText = result;
        num1 = result.toString();
        num2 = "";
        operator = "";
        isOperatorSelected = false;
        isEqualClicked = true;
    }
});

clearOne.addEventListener("click", function() {
    if (isEqualClicked) {
        clearDisplay(); 
    } else {
        if (num2) {
            num2 = num2.slice(0, -1); 
        } else if (operator) {
            operator = ""; 
            isOperatorSelected = false;
        } else if (num1) {
            num1 = num1.slice(0, -1); 
        }
        display.innerText = `${num1} ${operator} ${num2}`; 
    }
});


