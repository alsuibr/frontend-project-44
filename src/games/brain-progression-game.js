import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameExplanation = 'What number is missing in the progression?';

const generateProgression = () => {
  const progression = [];
  const stepSize = getRandomNumber(0, 6);
  const progressionLength = getRandomNumber(5, 11);
  progression.push(getRandomNumber(0, 11));

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + stepSize);
  }
  return progression;
};

const getQuestion = (array, index) => {
  const newArray = [...array];
  newArray[index] = '..';
  const string = newArray.join(' ');
  return string;
};

const getAnswer = (array, index) => array[index].toString();

const getQuestionAndAnswer = () => {
  const progression = generateProgression();
  const hiddenIndex = getRandomNumber(0, progression.length);
  const question = getQuestion(progression, hiddenIndex);
  const answer = getAnswer(progression, hiddenIndex);
  return [question, answer];
};

const startProgresGame = () => {
  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default startProgresGame;
