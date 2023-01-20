import { getRandomNumber, getPlayerAnswer } from '../functions.js';

const isPrime = (number) => {
  let counter = 0;
  for (let i = 2; i < (number / 2) + 1; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }
  if (counter === 0) {
    return 'yes';
  }
  return 'no';
};

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const number = getRandomNumber(500) + 1;
  console.log(`Question: ${number}`);

  const correctResult = isPrime(number);
  const playerResult = getPlayerAnswer();

  return [playerResult, correctResult];
};

export default brainPrime;
