import readlineSync from 'readline-sync';

const runEngine = (gameExplanation, generateTheQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(gameExplanation);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${generateTheQuestion()}`);
    let usersAnswer;
    const getUsersAnswer = () => {
      usersAnswer = readlineSync.question('Your answer: ');
    };

    getUsersAnswer();

    const correctAnswer = getCorrectAnswer();

    if (usersAnswer !== correctAnswer) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i === 2) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};

export default runEngine;
