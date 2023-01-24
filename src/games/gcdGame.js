import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

export const rules = 'Find the greatest common divisor of given numbers.';

const findReminder = (number1, number2) => {
  let resultNum1 = number1;
  let resultNum2 = number2;

  while (resultNum1 !== resultNum2) {
    if (resultNum1 > resultNum2) {
      resultNum1 -= resultNum2;
    } else {
      resultNum2 -= resultNum1;
    }
  }
  return resultNum1;
};

const brainGCD = () => {
  const number1 = getRandomNumber(0, 200);
  const number2 = getRandomNumber(0, 100);
  console.log(`Question: ${number1} ${number2}`);

  const correctResult = findReminder(number1, number2);
  const playerResult = Number(readlineSync.question('Your answer: '));
  return [playerResult, correctResult];
};

export default brainGCD;
