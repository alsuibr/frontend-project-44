import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameExplanation = 'Find the greatest common divisor of given numbers.';

const getQuestion = (number1, number2) => `${number1} ${number2}`;

const getAnswer = (number1, number2) => {
  let gcd = 1;
  const smallerNumber = (number1 < number2 ? number1 : number2);
  if (number1 % number2 === 0 || number2 % number1 === 0) {
    return smallerNumber.toString();
  }
  for (let i = 2; i <= (smallerNumber / 2); i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  return gcd.toString();
};

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 31);
  const randomNumber2 = getRandomNumber(1, 31);
  const question = getQuestion(randomNumber1, randomNumber2);
  const answer = getAnswer(randomNumber1, randomNumber2);
  return [question, answer];
};

const startGCDGame = () => {
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default startGCDGame;
