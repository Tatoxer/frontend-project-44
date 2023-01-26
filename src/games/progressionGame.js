import getRandomNumber from '../utils.js';

export const description = 'What number is missing in the progression?';

const makeProgression = (firstElem, value, length) => {
  const progression = [firstElem];
  let counter = 1;

  while (counter <= length) {
    progression[counter] = progression[counter - 1] + value;
    counter += 1;
  }
  return progression;
};

const generateProgressionData = () => {
  const firstElemOfProgression = getRandomNumber(0, 10);
  const progressionValue = getRandomNumber(1, 41);
  const progressionLength = getRandomNumber(5, 11);

  const progression = makeProgression(firstElemOfProgression, progressionValue, progressionLength);
  const indexOfEncryption = getRandomNumber(0, progression.length);
  const correctResult = progression[indexOfEncryption].toString();

  progression[indexOfEncryption] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return [correctResult, question];
};

export default generateProgressionData;
