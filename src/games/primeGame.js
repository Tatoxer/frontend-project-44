import getRandomNumber from '../utils.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let counter = 0;
  for (let i = 2; i < (number / 2) + 1; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }
  return counter === 0;
};

const generatePrimeData = () => {
  const number = getRandomNumber(1, 500);
  const question = `Question: ${number}`;

  const correctResult = isPrime(number) ? 'yes' : 'no';

  return [correctResult, question];
};

export default generatePrimeData;
