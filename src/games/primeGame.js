import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let counter = 0;
  for (let i = 2; i < (number / 2) + 1; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }
  return counter === 0;
};

const brainPrime = () => {
  const number = getRandomNumber(1, 500);
  console.log(`Question: ${number}`);

  let correctResult;
  // eslint-disable-next-line no-unused-expressions
  isPrime(number) ? correctResult = 'yes' : correctResult = 'no';
  const playerResult = readlineSync.question('Your answer: ');

  return [playerResult, correctResult];
};

export default brainPrime;
