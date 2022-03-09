// FUNCTIONS

function addToHistory(history, operation) {
  // creating a new empty object
  const newEntry = {};
  // putting the current date into the object
  newEntry.date = new Date();
  // putting the operation into the object
  newEntry.operation = operation;
  // adding this object at the end of the list of completed operations
  history.push(newEntry);
}

function logHistory(history) {
  // iterating over the array containing objects describing completed operations
  for (let i = 0; i < history.length; i += 1) {
    // for each operation we get the object describing the latter from the list
    const entry = history[i];
    // we print the date, the number and the result of the operation to the console
    console.log(`[${entry.date}] operation #${i} : ${entry.operation}`);
  }
}

function computeResult(firstNumber, secondNumber, operator) {
  // we return the result according to the type of operation to perform
  if (operator === '+') return firstNumber + secondNumber;
  if (operator === '-') return firstNumber - secondNumber;
  if (operator === '*') return firstNumber * secondNumber;
  if (operator === '/') return firstNumber / secondNumber;
  // if the operator is not a valid operator (+, -, *, /), we display a wrning in the console and return null
  console.warn('invalid operator');
  return null;
}

function getValidNumber(message) {
  let input;

  // We ask the user to enter something until it's a valid number
  do {
    input = parseFloat(prompt(message));
  } while (typeof input !== 'number' || isNaN(input));

  return input;
}

function getOperator() {
  // we define the list of valid operators
  const allowedOperators = ['+', '-', '*', '/'];
  let input;

  // we ask the user to enter something until it is a valid operator
  do {
    input = prompt('operator ?');
  } while (!allowedOperators.includes(input));

  return input;
}

// MAIN PROGRAM
const operationHistory = [];

do {
  // getting user inputs
  const firstValue = getValidNumber('first value ?');
  const operator = getOperator();
  const secondValue = getValidNumber('second value ?');
  // computing the result
  const result = computeResult(firstValue, secondValue, operator);
  // displaying the operation along with the result in a popup
  const completedOperation = `${firstValue} ${operator} ${secondValue} = ${result}`;
  alert(completedOperation);
  // adding the completed operation in the hisotry
  addToHistory(operationHistory, completedOperation);
} while (confirm('Do you want to perform another operation ?')); // we repeat the program as long as the user clicks on "OK" in the confirm dialog

// logging the operation hisotry to the console when the program ends
logHistory(operationHistory);
