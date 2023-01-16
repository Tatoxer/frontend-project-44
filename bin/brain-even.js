import readlineSync from 'readline-sync';
import greeting from './brain-games.js';

const checkAndCountCorrectAnswers = (userAnswer, correctAnswer, counter) => {
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        // eslint-disable-next-line no-param-reassign
        counter += 1;
    } else {
        // eslint-disable-next-line no-param-reassign
        counter = 4;
        console.log('Wrong!');
    }
    return counter;
};

const brainEvenGame = () => {
    const name = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let counter = 0;
    while (counter < 3) {
        const randomNumber = Math.floor(Math.random() * 100);
        const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

        console.log(`Question: ${randomNumber}\n`);
        const userAnswer = readlineSync.question('Your answer: ');

        counter = checkAndCountCorrectAnswers(userAnswer, correctAnswer, counter);
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};

brainEvenGame();
