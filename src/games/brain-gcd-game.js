import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameExplanation = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 31);
  const randomNumber2 = getRandomNumber(1, 31);
  const question = `${randomNumber1} ${randomNumber2}`;
  const smallerNumber = (randomNumber1 < randomNumber2 ? randomNumber1 : randomNumber2);

  const getAnswer = () => {
    const commonDivisors = [];
    if (randomNumber1 % randomNumber2 === 0 || randomNumber2 % randomNumber1 === 0) {
      return smallerNumber.toString();
    }
    for (let i = 1; i <= (smallerNumber / 2); i += 1) {
      if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
        commonDivisors.push(i);
      }
    }
    return commonDivisors[commonDivisors.length - 1].toString();
  };
  const answer = getAnswer();
  return [question, answer];
};

const startGCDGame = () => {
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default startGCDGame;
