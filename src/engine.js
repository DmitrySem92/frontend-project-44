import { getUserName, getUserAnswer } from './cli.js';

const runGame = (gameData) => {
  const { description, generateRoundData } = gameData;
  console.log('Welcome to the Brain Games!');
  console.log(description);
  
  const userName = getUserName();
  console.log(`Hello, ${userName}!\n`);
  
  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer(question);
  
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  
    console.log('Correct!\n');
  }
  
  console.log(`Congratulations, ${userName}!\n`);
};

export default runGame;
