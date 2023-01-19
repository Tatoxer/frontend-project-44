#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

const askUserName = () => {
  let name = readlineSync.question('May I have your name?\n');
  if (name.length === 0) {
    name = 'noname';
  }
  name = _.upperFirst(name);
  console.log(`Hello, ${name}!`);
  return name;
};

export default askUserName;
