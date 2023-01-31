import readlineSync from 'readline-sync';
import { correctUserName } from './cli.js';

const playGame = (getGameData, description) => {
  console.log('Welcome to the Brain Games!');

  let name = readlineSync.question('May I have your name?\n');
  name = correctUserName(name);
  console.log(`Hello, ${name}!`);

  const roundsCount = 3;
  let round;
  console.log(description);

  for (round = 0; round < roundsCount; round += 1) {
    const [correctResult, question] = getGameData();
    console.log(question);
    const playerResult = readlineSync.question('Your answer: ').toString();

    if (playerResult !== correctResult) {
      console.log(`Wrong!, correct answer is '${correctResult}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
