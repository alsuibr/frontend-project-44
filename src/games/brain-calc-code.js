import { getRandomNumber } from "../utils.js";
import { runEngine } from "../index.js";

const getCalcParamAndRunEngine = () => {
    let gameExplanation = 'What is the result of the expression?';
    let randomNumber1;
    let randomNumber2;
    let randomOperator;

    const generateTheQuestion = () => {
        
        const operators = ['+', '-', '*']; 
        const getRandomOperator = (operators) => {
        return operators[Math.floor(Math.random() * operators.length)]
        };

        randomNumber1 = getRandomNumber(1, 11);
        randomNumber2 = getRandomNumber(1, 11);
        randomOperator = getRandomOperator(operators);
        return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    }
    
    const getCorrectAnswer = () => {
        switch (randomOperator) {
            case '+' :
                return (randomNumber1 + randomNumber2).toString();
            case '-' :
                return (randomNumber1 - randomNumber2).toString();
            case "*" :
                return (randomNumber1 * randomNumber2).toString();
        }
    };
runEngine (gameExplanation , generateTheQuestion, getCorrectAnswer);

};

export { getCalcParamAndRunEngine };