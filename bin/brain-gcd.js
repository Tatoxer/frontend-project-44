#!/usr/bin/env node
import greeting, {getPlayerAnswer} from './brain-games.js';
import {checkAndCountCorrectAnswers, getRandomNumber, printWinningMessage} from "./brain-games.js";

const findReminder = (number1, number2) => {
    while (number1 !== number2) {
        if (number1 > number2) {
            number1 = number1 - number2;
        } else {
            number2 = number2 - number1;
        }
    }
    return number1;
};

const brainGcd = () => {
    const name = greeting();
    console.log('Find the greatest common divisor of given numbers.')
    let counter = 0;
    while (counter < 3) {
        const number1 = getRandomNumber(200);
        const number2 = getRandomNumber();
        console.log(`Question: ${number1} ${number2}`);

        const correctResult = findReminder(number1, number2);
        const playerResult = Number(getPlayerAnswer());
        counter = checkAndCountCorrectAnswers(playerResult, correctResult, counter, name);

        printWinningMessage(counter, name);
    }
};

brainGcd();
