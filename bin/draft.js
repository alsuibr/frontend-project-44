import { getRandomNumber } from "../src/utils.js";

import { getRandomNumber } from "../utils.js";
import { runEngine } from "../index.js";

const getProgresParamAndRunEngine = () => {

    let gameExplanation = 'What number is missing in the progression?';
    let progression = [];
    let indexToHide;

    const generateTheQuestion = () => {
        const stepSize = getRandomNumber(0, 6);
console.log(`step size is ${stepSize}`);
        let emptyArray = [];
        progression = emptyArray;
console.log(`progression after assignment to empty is ${progression}`)
console.log(`progression length after assignment to empty is ${progression.length}`)
        progression.push(getRandomNumber(0, 11))
console.log(`progression[0] is ${progression[0]}`)
        let progressionLength = getRandomNumber(5, 11);
console.log(`progressionLength is ${progressionLength}`)

        for (let i = 1; i < progressionLength; i = i + 1) {
            progression.push(progression[i - 1] + stepSize)
            console.log(`progression is ${progression}`)
        }
console.log(`final progression is ${progression}`)
console.log(`progression.length is ${progression.length}`)
        const progressionWithHiddenEl = [... progression];
        indexToHide = getRandomNumber(0, progression.length);
        progressionWithHiddenEl[indexToHide] = '..'
        let progressionToDisplay = progressionWithHiddenEl.join(' '); 
        return progressionToDisplay;
    }

    const getCorrectAnswer = () => {
        return progression[indexToHide].toString();
    }

    runEngine (gameExplanation , generateTheQuestion, getCorrectAnswer);
};
     
export { getProgresParamAndRunEngine };