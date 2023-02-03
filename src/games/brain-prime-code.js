import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getPrimeParamAndRunEngine = () => {
  const gameExplanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(2, 101);
    let answer;
    for (let i = 2; i <= question / 2; i += 1) {
      if (question % i === 0) {
        answer = 'no';
        break;
      } else {
        answer = 'yes';
      }
    }
    return [question, answer];
  };
  getQuestionAndAnswer();
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default getPrimeParamAndRunEngine;
