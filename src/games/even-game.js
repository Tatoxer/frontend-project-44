#!/usr/bin/env node
import { getRandomNumber, getPlayerAnswer } from '../functions.js';

const brainEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = getRandomNumber();
  const correctResult = randomNumber % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}\n`);
  const playerResult = getPlayerAnswer();
  return [playerResult, correctResult];
};

export default brainEvenGame;
