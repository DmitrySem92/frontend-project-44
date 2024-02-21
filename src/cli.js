// src/cli.js
import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const getUserAnswer = (question) => readlineSync.question(`${question}\nYour answer: `);

export default { getUserName, getUserAnswer };
