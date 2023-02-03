import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getGCDparamAndRunEngine = () => {
  const gameExplanation = 'Find the greatest common divisor of given numbers.';
  const getQuestionAndAnswer = () => {
    const randomNumber1 = getRandomNumber(1, 31);
    const randomNumber2 = getRandomNumber(1, 31);
    const question = `${randomNumber1} ${randomNumber2}`;

    const smallerNumber = (randomNumber1 < randomNumber2 ? randomNumber1 : randomNumber2);

    const getGCD = () => {
      const commonDivisors = [];
      for (let i = 1; i <= (smallerNumber / 2); i += 1) {
        if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
          commonDivisors.push(i);
        }
      }
      return commonDivisors[commonDivisors.length - 1].toString();
    };

    // eslint-disable-next-line max-len
    const answer = (randomNumber1 % randomNumber2 === 0 || randomNumber2 % randomNumber1 === 0 ? smallerNumber.toString() : getGCD());

    return [question, answer];
  };

  getQuestionAndAnswer();
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default getGCDparamAndRunEngine;
