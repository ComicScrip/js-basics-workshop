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

// MAIN PROGRAM
const operationHistory = [];
