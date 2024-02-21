// src/logic/progression-logic.js
import hideElementInProgression from './progression-logic-helper.js';

const generateArithmeticProgression = (length, minStep, maxStep) => {
  const progression = [];
  let currentNumber = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;

  for (let i = 0; i < length; i += 1) {
    progression.push(currentNumber);
    currentNumber += step;
  }

  return progression;
};

const generateRoundDataProgression = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const minStep = 2;
  const maxStep = 5;

  const progression = generateArithmeticProgression(progressionLength, minStep, maxStep);
  const { hiddenValue, progression: progressionWithHidden } = hideElementInProgression(progression);
  const question = progressionWithHidden.join(' ');
  const correctAnswer = String(hiddenValue);

  return { question, correctAnswer };
};

export default generateRoundDataProgression;
