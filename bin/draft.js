//just draft to try running smaller pieces of code. ignore.

let expression = "2 + 3 * 4";
let result = eval(expression);
console.log(result)


console.log(eval("2 + 3 * 4")) 

//С введением второй игры у вас появляется общая для всех игр логика (Эту логику стоит поместить в файл src/index.js
//
import readlineSync, { question } from 'readline-sync';
import { playerName } from "../src/cli.js";

// let explainTheGame; 
//different for each game, will be defined in each game separately

// function generateTheQuestion(); 
//different for each game, will be defined in each game separately

// function getCorrectAnswer();
//different for each game, will be defined in each game separately

//да как это решить-то, вместо функций переменные чтоли подставлять в основном коде

  const getExplanation = () => {
    explanation = "some text"
  }
  getExplanation;

const runAnyGame = () => {
    
    console.log(explanation); // that part is not in the loop


    
    for (let i = 0; i < 3; i = i + 1) {

        let question;
        function get;
        console.log(`Question: ${question}`);

// but how to get the question in the common code, if question is different for each game^ i cant just leave a const here and dscribe 
// it in each game, the value should be different for each round of the game. So i actually have to run the function to get an anwer every time.
//I STILL DONT GET IT. Should i use a function as a parameter of a function when generation the question so it generated de novo each cycle?
//      
let usersAnswer;        
        const getUsersAnswer = () => {
            usersAnswer = readlineSync.question(`Your answer: `);
        };

        let correctAnswer;
        getCorrectAnswer();
        if (usersAnswer !== correctAnswer) {
            console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
            break;
        }
        if (usersAnswer === correctAnswer) {
            console.log('Correct!');
        }
        if (i === 2) {
            console.log(`Congratulations, ${ playerName }!`);
        }
    }
};

export { runAnyGame };