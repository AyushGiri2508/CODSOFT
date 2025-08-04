let display = document.getElementById("display");
let firstOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;

function appendNumber(number) {
  if (display.innerText === "0" || shouldResetDisplay) {
    display.innerText = number;
    shouldResetDisplay = false;
  } else {
    display.innerText += number;
  }
}

function chooseOperator(operator) {
  if (currentOperator !== null) calculate();
  firstOperand = parseFloat(display.innerText);
  currentOperator = operator;
  shouldResetDisplay = true;
}

function calculate() {
  if (currentOperator === null || shouldResetDisplay) return;
  const secondOperand = parseFloat(display.innerText);
  let result;

  switch (currentOperator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    default:
      return;
  }

  display.innerText = result;
  firstOperand = result;
  currentOperator = null;
  shouldResetDisplay = true;
}
