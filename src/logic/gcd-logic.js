// src/logic/gcd-logic.js
const generateRandomNumber = () => Math.floor(Math.random() * 100);

const calculateGCD = (a, b) => (b === 0 ? a : calculateGCD(b, a % b));

const generateRoundData = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(calculateGCD(num1, num2));
  return { question, correctAnswer };
};

export { generateRandomNumber, calculateGCD, generateRoundData };
