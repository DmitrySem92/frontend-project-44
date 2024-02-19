import readlineSync from 'readline-sync';

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
      return NaN;
  }
};

const playBrainCalc = () => {
  const userName = readlineSync.question('What ia the result of expression?\n');
  for (let i = 0; i < 3; i += 1) {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operator = generateRandomOperator();
    const correctAnswer = calculateExpression(num1, operator, num2);

    const question = `${num1} ${operator} ${num2}`;
    const userAnswer = readlineSync.question(`Qestion: ${question}\nYour answer: `);

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Lets try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
