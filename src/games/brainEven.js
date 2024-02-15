import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const playBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  const roundsToWin = 3;

  while (correctAnswersCount < roundsToWin) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log('Let\'s try again.');
      return;
    }
  }

  console.log('Congratulations!');
};

export default playBrainEven;
