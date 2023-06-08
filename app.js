


const currentDisplay = document.querySelector(".current-display");
const previousDisplay = document.querySelector(".previous-display");
const calcBtns = document.querySelectorAll(".calc-btn")

let currentNumber = "";
let previousNumber = "";
let selectedOperator = "+";

currentDisplay.textContent = currentNumber;

calcBtns.forEach((calcBtn) => {
    calcBtn.addEventListener('click', () => {

        if (calcBtn.classList.contains("number-btn")) {
            currentNumber += calcBtn.innerText
            currentDisplay.textContent = currentNumber;
        }

        if (calcBtn.classList.contains("operator-btn")) {
            if (calcBtn.innerText != "=" && calcBtn.innerText != "C") {
                selectedOperator = calcBtn.innerText;
            };

            if (calcBtn.innerText === "C") {
                currentNumber = "";
                previousNumber = "";
            }

            if (selectedOperator === "+") {
                if (previousNumber === "") {
                    previousNumber = currentNumber;
                    currentNumber = "";
                    currentDisplay.textContent = currentNumber;
                    previousDisplay.textContent = previousNumber;
                } else {
                    previousNumber = addTwo(currentNumber, previousNumber);
                    previousDisplay.textContent = previousNumber;
                    currentNumber = "";
                    currentDisplay.textContent = currentNumber;
                }
            };
            if (selectedOperator === "-") {
                if (previousNumber === "") {
                    previousNumber = currentNumber;
                    currentNumber = "";
                    currentDisplay.textContent = currentNumber;
                    previousDisplay.textContent = previousNumber;
                } else {
                    previousNumber = subtractTwo(previousNumber, currentNumber);
                    previousDisplay.textContent = previousNumber;
                    currentNumber = "";
                    currentDisplay.textContent = currentNumber;
                }
            };
            if (selectedOperator === "x") {
                if (previousNumber === "") {
                    previousNumber = currentNumber;
                    currentNumber = "";
                    currentDisplay.textContent = currentNumber;
                    previousDisplay.textContent = previousNumber;
                } else {
                    previousNumber = multiplyTwo(currentNumber, previousNumber);
                    previousDisplay.textContent = previousNumber;
                    currentNumber = "";
                    currentDisplay.textContent = currentNumber;
                }
            };
            if (selectedOperator === "/") {
                if (previousNumber === "") {
                    previousNumber = currentNumber;
                    currentNumber = "";
                    currentDisplay.textContent = currentNumber;
                    previousDisplay.textContent = previousNumber;
                } else {
                    previousNumber = divideTwo(previousNumber, currentNumber);
                    previousDisplay.textContent = previousNumber;
                    currentNumber = "";
                    currentDisplay.textContent = currentNumber;
                }
            };

            // EQUAL KEY
            if (calcBtn.innerText === "=") {
                if (selectedOperator === "+") {
                    if (previousNumber === "") {
                        previousNumber = currentNumber;
                        currentNumber = "";
                        currentDisplay.textContent = currentNumber;
                        previousDisplay.textContent = previousNumber;
                    } else {
                        previousNumber = addTwo(currentNumber, previousNumber);
                        previousDisplay.textContent = previousNumber;
                        currentNumber = "";
                        currentDisplay.textContent = currentNumber;
                    }
                };
                if (selectedOperator === "-") {
                    if (previousNumber === "") {
                        previousNumber = currentNumber;
                        currentNumber = "";
                        currentDisplay.textContent = currentNumber;
                        previousDisplay.textContent = previousNumber;
                    } else {
                        previousNumber = subtractTwo(previousNumber, currentNumber);
                        previousDisplay.textContent = previousNumber;
                        currentNumber = "";
                        currentDisplay.textContent = currentNumber;
                    }
                };
                if (selectedOperator === "x") {
                    if (previousNumber === "") {
                        previousNumber = currentNumber;
                        currentNumber = "";
                        currentDisplay.textContent = currentNumber;
                        previousDisplay.textContent = previousNumber;
                    } else {
                        previousDisplay.textContent = previousNumber;
                        currentNumber = "";
                        currentDisplay.textContent = currentNumber;
                    }
                };
                if (selectedOperator === "/") {
                    if (previousNumber === "") {
                        previousNumber = currentNumber;
                        currentNumber = "";
                        currentDisplay.textContent = currentNumber;
                        previousDisplay.textContent = previousNumber;
                    } else {
                        previousDisplay.textContent = previousNumber;
                        currentNumber = "";
                        currentDisplay.textContent = currentNumber;
                    }
                };
            }
        }
    });
});




function addTwo(num1, num2) {
    let addedNumber = Number(num1) + Number(num2);
    addedNumber.toString();
    return addedNumber;
}

function subtractTwo(num1, num2) {
    let subtractedNumber = Number(num1) - Number(num2);
    subtractedNumber.toString();
    return subtractedNumber;
}

function multiplyTwo(num1, num2) {
    let multipliedNumber = Number(num1) * Number(num2);
    multipliedNumber.toString();
    return multipliedNumber;
}

function divideTwo(num1, num2) {
    let dividedNumber = Number(num1) / Number(num2);
    dividedNumber.toString();
    return dividedNumber;
}

// function operate(firstNum, secondNum, operator) {
//     if(operator === "plus") {
//         return addTwo(firstNum, secondNum);
//     }
//     else if(operator === "minus") {
//         return subtractTwo(firstNum, secondNum);
//     }
//     else if(operator === "multiply") {
//         return multiplyTwo(firstNum, secondNum);
//     }
//     else if(operator === "divide") {
//         return divideTwo(firstNum, secondNum);
//     }
//     else {
//         alert("Incorrect operator selected! :O")
//     }
// }
























