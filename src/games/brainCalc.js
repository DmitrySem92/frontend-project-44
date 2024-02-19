// src/games/brainCalc.js
import runGame from '../engine.js';
import { generateRoundData } from '../logic/calc-logic.js';

const description = 'What is the result of the expression?';

const playBrainCalc = () => {
  runGame({ description, generateRoundData });
};

export default playBrainCalc;
