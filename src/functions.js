#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const getRandomNumber = (toNumber = 100) => Math.floor(Math.random() * toNumber);

export const getPlayerAnswer = () => readlineSync.question('Your answer: ');
