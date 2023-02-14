import { getRandomNumber, isPrime } from '../utils.js';
import runEngine from '../index.js';

const gameExplanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 50);
  const answer = isPrime(question);
  return [question, answer];
};

const startPrimeGame = () => {
  getQuestionAndAnswer();
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default startPrimeGame;
