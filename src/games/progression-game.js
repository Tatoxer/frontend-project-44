#!/usr/bin/env node
import { getRandomNumber, getPlayerAnswer } from '../functions.js';

const getRandomNumberBetweenValues = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const makeProgression = () => {
  const firstElem = getRandomNumber(10);
  const progressionValue = getRandomNumberBetweenValues(1, 41);
  const progressionLength = getRandomNumberBetweenValues(5, 11);
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
  console.log('What number is missing in the progression?');
  const progression = makeProgression();
  const indexOfEncryption = getRandomNumberBetweenValues(0, progression.length);
  const encryptedProgression = makeEncryptedProgression(progression, indexOfEncryption);
  const correctResult = progression[indexOfEncryption];

  console.log(`Question: ${encryptedProgression.join(' ')}`);
  const playerResult = Number(getPlayerAnswer());

  return [playerResult, correctResult];
};

export default brainProgression;
