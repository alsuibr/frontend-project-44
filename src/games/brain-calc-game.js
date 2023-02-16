import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameExplanation = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length)];
  const randomNumber1 = getRandomNumber(1, 11);
  const randomNumber2 = getRandomNumber(1, 11);
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  let answer;
  switch (randomOperator) {
    case '+':
      answer = (randomNumber1 + randomNumber2).toString();
      break;
    case '-':
      answer = (randomNumber1 - randomNumber2).toString();
      break;
    case '*':
      answer = (randomNumber1 * randomNumber2).toString();
      break;
    default:
      console.log('error');
  }
  return [question, answer];
};

const startCalcGame = () => {
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default startCalcGame;
