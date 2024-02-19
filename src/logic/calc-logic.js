// src/logic/calc-logic.js
const generateRandomNumber = () => Math.floor(Math.random() * 100);

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculateExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRoundData = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operator = generateRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculateExpression(num1, operator, num2));
  return { question, correctAnswer };
};




export {
  generateRandomNumber, generateRandomOperator, calculateExpression, generateRoundData,
};



