import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameExplanation = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 101);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => {
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default startEvenGame;
