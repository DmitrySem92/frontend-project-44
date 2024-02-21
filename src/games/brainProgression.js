// src/games/brainProgression.js
import runGame from '../engine.js';
import generateRoundDataProgression from '../logic/progression-logic.js';

const description = 'What number is missing in the progression?';

const playBrainProgression = () => {
  runGame({ description, generateRoundData: generateRoundDataProgression });
};

export default playBrainProgression;
