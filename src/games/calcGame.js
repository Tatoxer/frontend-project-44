import getRandomNumber from '../utils.js';

export const description = 'What is the result of the expression?';
const calculate = (number1, number2, operation) => {
  let result;
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
    default:
      throw new Error(`Unknown operator ${operation}`);
  }
  return result;
};

const generateCalcData = () => {
  const expressions = ['+', '-', '*'];
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 10);
  const operation = expressions[getRandomNumber(0, expressions.length)];
  const correctResult = calculate(number1, number2, operation).toString();

  const question = `Question: ${number1} ${operation} ${number2}`;
  return [correctResult, question];
};

export default generateCalcData;
