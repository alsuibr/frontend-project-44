import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getProgresParamAndRunEngine = () => {
  const gameExplanation = 'What number is missing in the progression?';
  let progression = [];
  let indexToHide;

  const generateTheQuestion = () => {
    const stepSize = getRandomNumber(0, 6);
    const emptyArray = [];
    progression = emptyArray;
    progression.push(getRandomNumber(0, 11));
    const progressionLength = getRandomNumber(5, 11);

    for (let i = 1; i < progressionLength; i += 1) {
      progression.push(progression[i - 1] + stepSize);
    }

    const progressionWithHiddenEl = [...progression];
    indexToHide = getRandomNumber(0, progression.length);
    progressionWithHiddenEl[indexToHide] = '..';
    const progressionToDisplay = progressionWithHiddenEl.join(' ');
    return progressionToDisplay;
  };

  const getCorrectAnswer = () => progression[indexToHide].toString();

  runEngine(gameExplanation, generateTheQuestion, getCorrectAnswer);
};

export default getProgresParamAndRunEngine;
