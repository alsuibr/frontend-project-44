import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameExplanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 50);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => {
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default startPrimeGame;
