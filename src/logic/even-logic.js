// src/logic/even-logic.js

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export { generateRandomNumber, isEven, getRoundData };
