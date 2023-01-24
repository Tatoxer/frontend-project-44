import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const isEven = (randNumber) => (randNumber % 2 === 0 ? 'yes' : 'no');
export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenGame = () => {
  const randomNumber = getRandomNumber(0, 100);
  const correctResult = isEven(randomNumber);

  console.log(`Question: ${randomNumber}\n`);
  const playerResult = readlineSync.question('Your answer: ');
  return [playerResult, correctResult];
};

export default brainEvenGame;
