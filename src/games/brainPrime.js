// src/games/brainPrime.js
import runGame from '../engine.js';
import { isPrime, generateRandomNumber } from '../logic/prime-logic.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const playBrainPrime = () => {
  runGame({
    description,
    generateRoundData: () => {
      const question = generateRandomNumber();
      const correctAnswer = isPrime(question) ? 'yes' : 'no';
      return { question, correctAnswer };
    },
  });
};

export default playBrainPrime;
