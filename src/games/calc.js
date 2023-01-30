import getRandomNumber from '../utils.js';

export const description = 'What is the result of the expression?';
const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator ${operation}`);
  }
};

const generateCalcData = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 10);
  const operation = operators[getRandomNumber(0, operators.length)];

  const question = `Question: ${number1} ${operation} ${number2}`;
  const correctResult = calculate(number1, number2, operation).toString();

  return [correctResult, question];
};

export default generateCalcData;
