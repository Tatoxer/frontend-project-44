#!/usr/bin/env node
import { getRandomNumber, getPlayerAnswer } from '../functions.js';

const findReminder = (number1, number2) => {
  while (number1 !== number2) {
    if (number1 > number2) {
      // eslint-disable-next-line no-param-reassign
      number1 -= number2;
    } else {
      // eslint-disable-next-line no-param-reassign
      number2 -= number1;
    }
  }
  return number1;
};

const brainGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const number1 = getRandomNumber(200);
  const number2 = getRandomNumber();
  console.log(`Question: ${number1} ${number2}`);

  const correctResult = findReminder(number1, number2);
  const playerResult = Number(getPlayerAnswer());
  return [playerResult, correctResult];
};

export default brainGCD;
