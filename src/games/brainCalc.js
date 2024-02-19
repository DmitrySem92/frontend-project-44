// src/games/brainCalc.js
import runGame from '../engine.js';
import { generateRandomNumber, generateRandomOperator, calculateExpression } from '../logic/calc-logic.js';

const description = 'What is the result of the expression?';

const generateRoundData = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operator = generateRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculateExpression(num1, operator, num2));
  return { question, correctAnswer };
};

const playBrainCalc = () => {
  runGame({ description, generateRoundData });
};

export default playBrainCalc;
