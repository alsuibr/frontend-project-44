import { getRandomNumber } from "../utils.js";
import { runEngine } from "../index.js";

const getGCDparamAndRunEngine = () => {

    let gameExplanation = "Find the greatest common divisor of given numbers.";
    let randomNumber1;
    let randomNumber2;
    let gcd;

    const generateTheQuestion = () => {
        randomNumber1 = getRandomNumber(1, 31);
        randomNumber2 = getRandomNumber(1, 31);
        return `${randomNumber1} ${randomNumber2}`;
    }
    
    const getCorrectAnswer = () => {
        let smallerNumber;
        const commonDivisors = [];
    
        if (randomNumber1 < randomNumber2) {
            smallerNumber = randomNumber1;
        }
        if (randomNumber2 < randomNumber1) {
            smallerNumber = randomNumber2;
        }
        if (randomNumber1 === randomNumber2) {
            return randomNumber1.toString();
            //if numbers are equal just return either of the numbers and dont go further to calculations
        }
    
        const getGCD = () => {
            for (let i = 1; i <= (smallerNumber / 2); i = i + 1) {
                if (randomNumber1 % i === 0 && randomNumber2 % i === 0 ) {
                    commonDivisors.push(i);
                }
            }
            gcd = commonDivisors[commonDivisors.length - 1];
        }
    
        (randomNumber1 % randomNumber2 === 0 || randomNumber2 % randomNumber1 === 0) ? gcd = smallerNumber : getGCD(randomNumber1, randomNumber2);
        
        return gcd.toString();
    }

    runEngine(gameExplanation , generateTheQuestion, getCorrectAnswer);
};

export { getGCDparamAndRunEngine };