import getRandomNumber from '../utils.js';

export const description = 'What number is missing in the progression?';

const makeProgression = (firstElem, step, length) => {
  const progression = [firstElem];

  for (let i = 1; i <= length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const generateProgressionData = () => {
  const firstElement = getRandomNumber(0, 10);
  const progressionStep = getRandomNumber(1, 41);
  const progressionLength = getRandomNumber(5, 11);

  const progression = makeProgression(firstElement, progressionStep, progressionLength);
  const hiddenIndex = getRandomNumber(0, progression.length);
  const correctResult = progression[hiddenIndex].toString();

  progression[hiddenIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return [correctResult, question];
};

export default generateProgressionData;
