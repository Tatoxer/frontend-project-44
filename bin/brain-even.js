#!/usr/bin/env node
import greeting from './brain-games.js';
import {checkAndCountCorrectAnswers, getRandomNumber, printWinningMessage, getPlayerAnswer} from "./brain-games.js";

const brainEvenGame = () => {
    const name = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let counter = 0;
    while (counter < 3) {
        const randomNumber = getRandomNumber();
        const correctResult = randomNumber % 2 === 0 ? 'yes' : 'no';

        console.log(`Question: ${randomNumber}\n`);
        const playerResult = getPlayerAnswer();
        counter = checkAndCountCorrectAnswers(playerResult, correctResult, counter, name);

        printWinningMessage(counter, name);
    }
};

brainEvenGame();
