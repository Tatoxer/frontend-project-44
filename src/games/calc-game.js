import { getRandomNumber, getPlayerAnswer } from '../functions.js';

const chooseOperation = () => {
  const expressions = ['+', '-', '*'];
  const min = 0;
  const max = 3;
  return expressions[Math.floor(Math.random() * (max - min) + min)];
};

const applyOperation = (number1, number2, operation) => {
  let result;
  if (operation === '+') {
    result = number1 + number2;
  } else if (operation === '-') {
    result = number1 - number2;
  } else {
    result = number1 * number2;
  }
  return result;
};

const brainCalc = () => {
  console.log('What is the result of the expression?');
  const number1 = getRandomNumber();
  const number2 = getRandomNumber(10);
  const operation = chooseOperation();
  const correctResult = applyOperation(number1, number2, operation);

  console.log(`Question: ${number1} ${operation} ${number2}`);
  const playerResult = Number(getPlayerAnswer());
  return [playerResult, correctResult];
};

export default brainCalc;
