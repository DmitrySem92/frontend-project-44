// src/cli.js
import readlineSync from 'readline-sync';

const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getUserAnswer = (question) => readlineSync.question(`${question}\nYour answer: `);

export { greetUser, getUserAnswer };
