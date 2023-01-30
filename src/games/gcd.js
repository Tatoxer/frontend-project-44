import getRandomNumber from '../utils.js';

export const description = 'Find the greatest common divisor of given numbers.';

// GCD - greatest common divisor
const getGCD = (number1, number2) => {
  let resultNum1 = number1;
  let resultNum2 = number2;

  while (resultNum1 !== 0 && resultNum2 !== 0) {
    if (resultNum1 > resultNum2) {
      resultNum1 %= resultNum2;
    } else {
      resultNum2 %= resultNum1;
    }
  }
  return resultNum1 + resultNum2;
};

const generateGCSData = () => {
  const number1 = getRandomNumber(0, 200);
  const number2 = getRandomNumber(0, 100);
  const question = `Question: ${number1} ${number2}`;
  const correctResult = getGCD(number1, number2).toString();
  return [correctResult, question];
};

export default generateGCSData;
