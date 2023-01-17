#!/usr/bin/env node
import greeting, {getPlayerAnswer} from './brain-games.js';
import {checkAndCountCorrectAnswers, getRandomNumber, printWinningMessage} from "./brain-games.js";

const isPrime = (number) => {
    let counter = 0;
    for (let i = 2; i < (number / 2) + 1; i += 1) {
        if (number % i === 0) {
            counter += 1;
        }
    }
    if (counter === 0) {
        return 'yes';
    } else {
        return 'no';
    }
};

const brainPrime = () => {
    const name = greeting();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    let counter = 0;

    while (counter < 3) {
        const number = getRandomNumber(500);
        console.log(`Question: ${number}`);
        const correctResult = isPrime(number);
        const playerResult = getPlayerAnswer();
        counter = checkAndCountCorrectAnswers(playerResult, correctResult, counter, name);

        printWinningMessage(counter, name);
    }
};

brainPrime();