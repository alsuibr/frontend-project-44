import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getCalcParamAndRunEngine = () => {
  const gameExplanation = 'What is the result of the expression?';

  const getQuestionAndAnswer = () => {
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const randomNumber1 = getRandomNumber(1, 11);
    const randomNumber2 = getRandomNumber(1, 11);
    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

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

    return [question, answer];
  };

  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default getCalcParamAndRunEngine;
