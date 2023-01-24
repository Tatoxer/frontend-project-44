#!/usr/bin/env node

import askUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUserName();

const playGame = (game, rules) => {
  let totalResult = 'win';
  const maxRounds = 3;
  console.log(rules);

  for (let round = 0; round < maxRounds; round += 1) {
    const gameData = game();
    const [playerResult, correctResult] = [gameData[0], gameData[1]];

    if (playerResult === correctResult) {
      console.log('Correct!\n');
    } else {
      console.log(`Wrong!, correct answer is '${correctResult}'`);
      console.log(`Let's try again, ${name}!`);
      totalResult = 'loose';
      break;
    }
  }
  if (totalResult === 'loose') {
    return;
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
