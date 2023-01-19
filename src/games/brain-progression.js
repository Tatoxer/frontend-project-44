#!/usr/bin/env node
import {
    checkCorrectAnswers,
    getRandomNumber,
    getPlayerAnswer,
    greeting,
    getRandomNumberBetweenValues, returnGameResult
} from "/src/functions.js";

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
    let gameResult = true;

    while (counter < 3) {
        const progression = makeProgression();
        const indexOfEncryption = getRandomNumberBetweenValues(0, progression.length)
        const encryptedProgression = makeEncryptedProgression(progression, indexOfEncryption);
        const correctResult = progression[indexOfEncryption];

        console.log(`Question: ${encryptedProgression.join(' ')}`);
        const playerResult = Number(getPlayerAnswer());
        const questionResult = checkCorrectAnswers(playerResult, correctResult);
        gameResult = returnGameResult(questionResult, correctResult, counter, name, gameResult);
    }
    return gameResult;
};

export default brainProgression;