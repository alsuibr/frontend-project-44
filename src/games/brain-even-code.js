import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getEvenParamAndRunEngine = () => {
  const gameExplanation = 'Answer "yes" if the number is even, otherwise answer "no".';
  let randomNumber;

  const generateTheQuestion = () => {
    randomNumber = getRandomNumber(1, 101);
    return randomNumber;
  };
  const getCorrectAnswer = () => (randomNumber % 2 === 0 ? 'yes' : 'no');

  runEngine(gameExplanation, generateTheQuestion, getCorrectAnswer);
};

export default getEvenParamAndRunEngine;
