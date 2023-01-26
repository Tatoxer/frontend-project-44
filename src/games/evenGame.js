import getRandomNumber from '../utils.js';

const isEven = (randNumber) => (randNumber % 2 === 0);
export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateEvenData = () => {
  const randomNumber = getRandomNumber(0, 100);
  const correctResult = isEven(randomNumber) ? 'yes' : 'no';

  const question = `Question: ${randomNumber}`;
  return [correctResult, question];
};

export default generateEvenData;
