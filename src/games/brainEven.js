// src/games/brainEven.js
import { runGame } from '../engine.js';
import { generateRandomNumber, isEven } from '../logic/calc-logic.js';
import { getUserName, getUserAnswer } from '../cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateRoundData = () => {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playBrainEven = () => {
  runGame({ description, generateRoundData, getUserName, getUserAnswer });
};

export default playBrainEven;
