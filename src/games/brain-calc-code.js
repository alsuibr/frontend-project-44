import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getCalcParamAndRunEngine = () => {
  const gameExplanation = 'What is the result of the expression?';
  let randomNumber1;
  let randomNumber2;
  let randomOperator;

  const generateTheQuestion = () => {
    const operators = ['+', '-', '*'];
    const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];

    randomNumber1 = getRandomNumber(1, 11);
    randomNumber2 = getRandomNumber(1, 11);
    randomOperator = getRandomOperator(operators);
    return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  };

  const getCorrectAnswer = () => {
    let answer;
    // eslint-disable-next-line default-case
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
    }
    return answer;
  };

  runEngine(gameExplanation, generateTheQuestion, getCorrectAnswer);
};

export default getCalcParamAndRunEngine;
