#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from './brain-games.js';
import {checkAndCountCorrectAnswers} from "./brain-games.js";

const brainEvenGame = () => {
    const name = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let counter = 0;
    while (counter < 3) {
        const randomNumber = Math.floor(Math.random() * 100);
        const correctResult = randomNumber % 2 === 0 ? 'yes' : 'no';

        console.log(`Question: ${randomNumber}\n`);
        const userResult = readlineSync.question('Your answer: ');

        counter = checkAndCountCorrectAnswers(userResult, correctResult, counter, name);
        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};

brainEvenGame();
