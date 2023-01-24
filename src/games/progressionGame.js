import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

export const rules = 'What number is missing in the progression?';

const makeProgression = () => {
  const firstElem = getRandomNumber(0, 10);
  const progressionValue = getRandomNumber(1, 41);
  const progressionLength = getRandomNumber(5, 11);
  const progression = [firstElem];
  let counter = 1;

  while (counter <= progressionLength) {
    progression[counter] = progression[counter - 1] + progressionValue;
    counter += 1;
  }
  return progression;
};

const makeEncryptedProgression = (progression, elem) => {
  const encryptedProgression = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const i of progression) {
    encryptedProgression.push(i);
  }
  encryptedProgression[elem] = '..';
  return encryptedProgression;
};

const brainProgression = () => {
  const progression = makeProgression();
  const indexOfEncryption = getRandomNumber(0, progression.length);
  const encryptedProgression = makeEncryptedProgression(progression, indexOfEncryption);
  const correctResult = progression[indexOfEncryption];

  console.log(`Question: ${encryptedProgression.join(' ')}`);
  const playerResult = Number(readlineSync.question('Your answer: '));

  return [playerResult, correctResult];
};

export default brainProgression;
