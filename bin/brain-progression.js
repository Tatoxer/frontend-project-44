#!/usr/bin/env node
import greeting from './brain-games.js';
import {checkAndCountCorrectAnswers, getRandomNumber, printWinningMessage, getPlayerAnswer} from "./brain-games.js";

const getRandomNumberBetweenValues = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

const makeProgression = () => {
    const firstElem = getRandomNumber(10);
    const progressionValue = getRandomNumberBetweenValues(1, 41);
    const progressionLength = getRandomNumberBetweenValues(5, 11);
    const progression = [firstElem];
    let counter = 1;

    while (counter <= progressionLength) {
        progression[counter] = progression[counter - 1] + progressionValue;
        counter += 1;
    }
    return progression;
};

const makeEncryptedProgression = (progression, elem) => {
    const encryptedProgression = [];
    for (const i of progression) {
        encryptedProgression.push(i);
    }
    encryptedProgression[elem] = '..';
    return encryptedProgression;
};

const brainProgression = () => {
    const name = greeting();
    console.log('What number is missing in the progression?')
    let counter = 0;

    while (counter < 3) {
        const progression = makeProgression();
        const indexOfEncryption = getRandomNumberBetweenValues(0, progression.length)
        const encryptedProgression = makeEncryptedProgression(progression, indexOfEncryption);
        const correctResult = progression[indexOfEncryption];

        console.log(`Question: ${encryptedProgression.join(' ')}`);
        const playerResult = Number(getPlayerAnswer());
        counter = checkAndCountCorrectAnswers(playerResult, correctResult, counter, name);
        printWinningMessage(counter, name);
    }
};

brainProgression();