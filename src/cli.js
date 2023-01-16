import readlineSync from "readline-sync";
const askUserName = () => {
    const name = readlineSync.question('May I have your name?\n')
    console.log(`Hello, ${name}!`);
};
export default askUserName;