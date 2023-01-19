#!/usr/bin/env node

import readlineSync from "readline-sync";

export const getRandomNumber = (mult = 100) => {
    return Math.floor(Math.random() * mult);
};

export const getPlayerAnswer = () => readlineSync.question('Your answer: ');
