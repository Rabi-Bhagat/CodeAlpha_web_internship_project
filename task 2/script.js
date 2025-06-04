let currentInput = '';
let display = document.getElementById('display');

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  display.innerText = currentInput;
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.innerText = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || '0';
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    display.innerText = currentInput;
  } catch (e) {
    display.innerText = 'Error';
    currentInput = '';
  }
}
