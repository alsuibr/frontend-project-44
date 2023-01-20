import { explainTheGame, getRandomNumber, generateTheQuestion, getCorrectAnswer, runAnyGame } from '../src/index.js'

    explainTheGame = 'What is the result of the expression?';
    
    const operators = ['+', '-', '*']; 
    const getRandomOperator = (operators) => {
        return randomOperator = Math.floor(Math.random()*operators.length)
    };

    let expression;
    let randomNumber1;
    let randomNumber2;
    let randomOperator;

    generateTheQuestion = () => {
        randomNumber1 = getRandomNumber(1, 11);
        randomNumber2 = getRandomNumber(1, 11);
        randomOperator = getRandomOperator(operators);
        expression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
        return expression;
    };

    let correctAnswer = eval(expression);
    
    runAnyGame();


