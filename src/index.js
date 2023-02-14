import readlineSync from 'readline-sync';

const runEngine = (gameExplanation, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(gameExplanation);

  const roundsMax = 3;
  for (let i = 0; i < roundsMax; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer !== answer) {
      return console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default runEngine;
