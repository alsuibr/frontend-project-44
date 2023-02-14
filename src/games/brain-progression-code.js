import { getRandomNumber, generateProgression } from '../utils.js';
import runEngine from '../index.js';

const gameExplanation = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const progression = generateProgression();
  const hiddenIndex = getRandomNumber(0, progression.length);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startProgresGame = () => {
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default startProgresGame;
