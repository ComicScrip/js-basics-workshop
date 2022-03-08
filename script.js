// DATA & FUNCTIONS
const operationHistory = [];

function addToHistory(operation) {
  const newEntry = {};
  entry.date = new Date();
  entry.operation = operation;
  operationHistory.push(newEntry);
}

function logHistory() {
  for (let i = 0; i < operationHistory.length; i += 1) {
    const entry = operationHistory[i];
    console.log(`[${entry.date}] operation #${i} : ${entry.operation}`);
  }
}

function computeResult(a, b, operator) {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '*') return a * b;
  if (operator === '/') return a / b;
  console.warn('invalid operator');
  return null;
}

function getValidNumber(message) {
  let input;

  do {
    input = parseFloat(prompt(message));
  } while (typeof input !== 'number' || isNaN(input));

  return input;
}

function getOperator() {
  let input;

  do {
    input = prompt('operator ?');
  } while (!['+', '-', '*', '/'].includes(input));

  return input;
}

// MAIN PROGRAM
do {
  const firstValue = getValidNumber('first value ?');
  const operator = getOperator();
  const secondValue = getValidNumber('second value ?');
  const result = computeResult(firstValue, secondValue, operator);
  const operationWithResult = `${firstValue} ${operator} ${secondValue} = ${result}`;
  alert(operationWithResult);
  addToHistory(operationWithResult);
} while (confirm('Do you want to perform another operation ?'));

logHistory();
