import readlineSync from 'readline-sync';
import greeting from './brain-games.js';

const brainEvenGame = () => {
    const name = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let counter = 0;
    while (counter < 3) {
        counter += 1;
        const randomNumber = Math.floor(Math.random() * 100);
        const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

        console.log(`Question: ${randomNumber}\n`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (rightAnswer === userAnswer) {
            console.log('Correct!');
        } else {
            console.log('Wrong!');
            counter = 4;
        }
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};

brainEvenGame();
