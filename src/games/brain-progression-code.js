import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getProgresParamAndRunEngine = () => {
  const gameExplanation = 'What number is missing in the progression?';

  const getQuestionAndAnswer = () => {
    const progression = [];
    const stepSize = getRandomNumber(0, 6);
    const progressionLength = getRandomNumber(5, 11);
    progression.push(getRandomNumber(0, 11));

    for (let i = 1; i < progressionLength; i += 1) {
      progression.push(progression[i - 1] + stepSize);
    }

    const copyOfProgression = [...progression];
    const indexToHide = getRandomNumber(0, progression.length);
    copyOfProgression[indexToHide] = '..';
    const question = copyOfProgression.join(' ');
    const answer = progression[indexToHide].toString();

    return [question, answer];
  };

  runEngine(gameExplanation, getQuestionAndAnswer);
};

export default getProgresParamAndRunEngine;
