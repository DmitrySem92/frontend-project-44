// src/games/brainGCD.js
import runGame from '../engine.js';
import { generateRoundData } from '../logic/gcd-logic.js';

const description = 'Find the greatest common divisor of given numbers.';

const playBrainGCD = () => {
  runGame({ description, generateRoundData });
};

export default playBrainGCD;
