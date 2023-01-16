// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const askUserName = () => {
    const name = readlineSync.question('May I have your name?\n');
    console.log(`Hello, ${name}!`);
    return name;
};
export default askUserName;
