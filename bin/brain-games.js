#!/usr/bin/env node

import askUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUserName();

const playGame = (game) => {
  let totalResult = 'win';
  let round = 0;

  while (round < 3) {
    const gameResult = game();
    const playerResult = gameResult[0];
    const correctResult = gameResult[1];

    if (playerResult === correctResult) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`Wrong!, correct answer is '${correctResult}'`);
      console.log(`Let's try again, ${name}!`);
      totalResult = 'loose';
      break;
    }
  }
  if (totalResult === 'win') {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGame;
