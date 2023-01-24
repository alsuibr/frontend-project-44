import { getRandomNumber } from "../utils.js";

const getCalcParametersForEngine = () => {
    
    let gameExplanation = 'What is the result of the expression?';
    let randomNumber1;
    let randomNumber2;
    let randomOperator;

    const generateTheQuestion = () => {
        
        const operators = ['+', '-', '*']; 
        const getRandomOperator = (operators) => {
        return Math.floor(Math.random() * operators.length)
        };

        randomNumber1 = getRandomNumber(1, 11);
        randomNumber2 = getRandomNumber(1, 11);
        randomOperator = getRandomOperator(operators);
        return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    }

    const getCorrectAnswer = () => {
        switch (randomOperator) {
            case '+' :
                return toString((randomNumber1 + randomNumber2));
            case '-' :
                return toString((randomNumber1 - randomNumber2));
            case "*" :
                return toString((randomNumber1 * randomNumber2));
        }
    }
}

export { getCalcParametersForEngine };