import readlineSync from 'readline-sync';
import _ from 'lodash';

const askUserName = () => readlineSync.question('May I have your name?\n');
export const correctUserName = (name) => {
  let correctedName = _.upperFirst(name);
  if (correctedName.length === 0) {
    correctedName = 'Noname';
  }
  return correctedName;
};
export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${correctUserName(askUserName())}!`);
};
