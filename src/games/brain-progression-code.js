import { getRandomNumber } from "../utils.js";
import { runEngine } from "../index.js";

const getProgresParamAndRunEngine = () => {

    let gameExplanation = 'What number is missing in the progression?';
    let progression = [];
    let indexToHide;

    const generateTheQuestion = () => {
        const stepSize = getRandomNumber(0, 6);
        let emptyArray = [];
        progression = emptyArray;
        progression.push(getRandomNumber(0, 11));
        let progressionLength = getRandomNumber(5, 11);

        for (let i = 1; i < progressionLength; i = i + 1) {
            progression.push(progression[i - 1] + stepSize);
        }

        const progressionWithHiddenEl = [... progression];
        indexToHide = getRandomNumber(0, progression.length);
        progressionWithHiddenEl[indexToHide] = '..';
        let progressionToDisplay = progressionWithHiddenEl.join(' '); 
        return progressionToDisplay;
    }

    const getCorrectAnswer = () => {
        return progression[indexToHide].toString();
    }

    runEngine (gameExplanation , generateTheQuestion, getCorrectAnswer);
};
    
export { getProgresParamAndRunEngine };