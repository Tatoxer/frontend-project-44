import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

export const rules = 'What is the result of the expression?';
const calculate = (number1, number2, operation) => {
  let result;
  // eslint-disable-next-line default-case
  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
  }
  return result;
};

const brainCalc = () => {
  const expressions = ['+', '-', '*'];
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 10);
  const operation = expressions[getRandomNumber(0, 3)];
  const correctResult = calculate(number1, number2, operation);

  console.log(`Question: ${number1} ${operation} ${number2}`);
  const playerResult = Number(readlineSync.question('Your answer: '));
  return [playerResult, correctResult];
};

export default brainCalc;
