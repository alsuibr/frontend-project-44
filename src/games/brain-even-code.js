import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getEvenParamAndRunEngine = () => {
  let question;
  let answer;
  const gameExplanation = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    question = getRandomNumber(1, 101);
    answer = (question % 2 === 0 ? 'yes' : 'no');
    return [question, answer];
  };
  getQuestionAndAnswer();
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default getEvenParamAndRunEngine;
