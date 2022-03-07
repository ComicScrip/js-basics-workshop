do {
  const firstValue = parseInt(prompt('first value ?'), 10);
  const operator = prompt('operator ?');
  const secondValue = parseInt(prompt('secondValue ?'), 10);

  switch (operator) {
    case '+':
      console.log(firstValue + secondValue);
      break;
    case '-':
      console.log(firstValue - secondValue);
      break;
    case '*':
      console.log(firstValue * secondValue);
      break;
    case '/':
      console.log(firstValue / secondValue);
      break;
    default:
      console.log('Invalid operator');
  }
} while (confirm('Do you want to do another operation ?'));
