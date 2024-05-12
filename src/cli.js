// src/cli.js
import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const getUserAnswer = (question) => readlineSync.question(`${question}\nYour answer: `);

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`)
};

export default { getUserName, getUserAnswer, greetUser };
