#!/usr/bin/env node
import askUserName from '../src/cli.js';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    return askUserName();
};

const checkAndCountCorrectAnswers = (userResult, correctResult, counter, name) => {
    if (userResult === correctResult) {
        console.log('Correct!');
        // eslint-disable-next-line no-param-reassign
        counter += 1;
    } else {
        // eslint-disable-next-line no-param-reassign
        counter = 4;
        console.log(`Wrong!, correct answer is '${correctResult}'`);
        console.log(`Let's try again, ${name}!`);
    }
    return counter;
};

export default greeting;
export {checkAndCountCorrectAnswers};
