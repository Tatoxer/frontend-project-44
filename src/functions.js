#!/usr/bin/env node
import askUserName from "../src/cli.js";

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    return askUserName();
};

export const checkCorrectAnswers = (userResult, correctResult) => {
    if (userResult === correctResult) {
        console.log('Correct!');
        return true;
    } else {
        return false
    }
};

export const getRandomNumber = (toNumber = 100) => {
    return Math.floor(Math.random() * toNumber);
};

export const getRandomNumberBetweenValues = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

export const printWinningMessage = (name) => console.log(`Congratulations, ${name}!`);

export const getPlayerAnswer = () => {
    return readlineSync.question('Your answer: ');
};

export const returnGameResult = (answer, correctResult, counter, name, gameResult) => {
    if (answer) {
        counter += 1;
        gameResult = true;
    } else {
        counter = 4;
        console.log(`Wrong!, correct answer is '${correctResult}'`);
        console.log(`Let's try again, ${name}!`);
        gameResult = false;
    }
    return gameResult;
};