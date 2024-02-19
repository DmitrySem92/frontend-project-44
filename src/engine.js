// src/engine.js
import readlineSync from 'readline-sync';

const runGame = ({ description, generateRoundData, roundsCount = 3 }) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
