import { getRandomNumber } from "../utils.js";
import { runEngine } from "../index.js";

const getPrimeParamAndRunEngine = () => {

    let gameExplanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    let number;
    const generateTheQuestion = () => {
        number = getRandomNumber(2,101);
        return number;
    }

    const getCorrectAnswer = () => {
        for (let i = 2; i <= number/2; i = i + 1) {
            if (number % i === 0) {
                return 'no';
            }
        } 
        return 'yes'
    }

    runEngine (gameExplanation , generateTheQuestion, getCorrectAnswer);
};
    
export { getPrimeParamAndRunEngine };