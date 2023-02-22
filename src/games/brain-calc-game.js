import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameExplanation = 'What is the result of the expression?';

const getQuestion = (number1, number2, symbol) => `${number1} ${symbol} ${number2}`;

const getAnswer = (number1, number2, symbol) => {
  switch (symbol) {
    case '+':
      return (number1 + number2).toString();
    case '-':
      return (number1 - number2).toString();
    case '*':
      return (number1 * number2).toString();
    default:
      console.log('undefined');
      return undefined;
  }
};

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length)];
  const randomNumber1 = getRandomNumber(1, 11);
  const randomNumber2 = getRandomNumber(1, 11);
  const question = getQuestion(randomNumber1, randomNumber2, randomOperator);
  const answer = getAnswer(randomNumber1, randomNumber2, randomOperator);
  return [question, answer];
};

const startCalcGame = () => {
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default startCalcGame;
