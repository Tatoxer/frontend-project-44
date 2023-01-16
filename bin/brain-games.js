#!/usr/bin/env node
import askUserName from '../src/cli.js';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    return askUserName();
};
export default greeting;
