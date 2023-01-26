#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askUserName from '../cli.js';

console.log('Welcome to the Brain Games!');
const name = askUserName();

const playGame = (game, description) => {
  const roundsCount = 3;
  let round;
  console.log(description);

  for (round = 0; round < roundsCount; round += 1) {
    // Оставил переменную для лучшей читаемости
    const getGameData = game();
    const [correctResult, question] = getGameData;
    console.log(question);
    const playerResult = readlineSync.question('Your answer: ').toString();

    if (playerResult !== correctResult) {
      console.log(`Wrong!, correct answer is '${correctResult}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!\n');
  }
  if (round === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGame;
