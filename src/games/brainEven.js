// src/games/brainEven.js
import runGame from '../engine.js';
import { generateRandomNumber, isEven } from '../logic/even-logic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateRoundData = () => {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question: String(question), correctAnswer };
};

const playBrainEven = () => {
  runGame({ description, generateRoundData });
};

export default playBrainEven;
