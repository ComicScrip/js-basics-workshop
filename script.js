const firstValue = parseInt(prompt('first value ?'), 10);
const operator = prompt('operator ?');
const secondValue = parseInt(prompt('second value ?'), 10);

let result = null;

switch (operator) {
  case '+':
    result = firstValue + secondValue;
    break;
  case '-':
    result = firstValue - secondValue;
    break;
  case '*':
    result = firstValue * secondValue;
    break;
  case '/':
    result = firstValue / secondValue;
    break;
  default:
    console.log('invalid operator');
}

if (typeof result === 'number' && !isNaN(result)) {
  alert(`${firstValue} ${operator} ${secondValue} = ${result}`);
} else {
  alert('The operation could not be performed, please try again');
}
