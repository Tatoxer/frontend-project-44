#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from './brain-games.js';
import {checkAndCountCorrectAnswers} from "./brain-games.js";

const chooseOperation = () => {
    const expressions = ['+', '-', '*'];
    const min = 0;
    const max = 3;
    return expressions[Math.floor(Math.random() * (max - min) + min)];
};

const applyOperation = (number1, number2, operation) => {
    let result;
    if (operation === '+') {
        result = number1 + number2;
    } else if (operation === '-') {
        result = number1 - number2;
    } else {
        result = number1 * number2;
    }
    return result;
};

const brainCalc = () => {
    const name = greeting();
    console.log('What is the result of the expression?');
    let counter = 0;

    while (counter < 3) {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 10);
        const operation = chooseOperation();
        const correctResult = applyOperation(number1, number2, operation);

        console.log(`Question: ${number1} ${operation} ${number2}`);
        const playerResult = Number(readlineSync.question('Your answer: '));
        counter = checkAndCountCorrectAnswers(playerResult, correctResult, counter, name);

        if (counter === 3) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};

brainCalc();