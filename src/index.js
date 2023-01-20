//С введением второй игры у вас появляется общая для всех игр логика (Эту логику стоит поместить в файл src/index.js
//
import readlineSync from 'readline-sync';
import { playerName } from "../src/cli.js";

let explainTheGame; //different for each game, will be defined in each game separately

const getRandomNumber = (min, max) => {     //probably will be used in each game 
    min = Math.ceil(min);
    max = Math.floor(max);
    return randomNumber = Math.floor(Math.random() * (max - min) + min);
};

function generateTheQuestion(); //different for each game, will be defined in each game separately
`Question: ${generateTheQuestion()}`;

function getCorrectAnswer(); //different for each game, will be defined in each game separately

const runAnyGame = () => {
    console.log(explainTheGame);
    for (let i = 0; i < 3; i = i + 1) {
        
        let usersAnswer;
        let correctAnswer;

        console.log(`Question: ${generateTheQuestion()}`);

        const getUsersAnswer = () => {
            usersAnswer = readlineSync.question(`Your answer: `);
         };

        getUsersAnswer();
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

export { explainTheGame, getRandomNumber, generateTheQuestion, getCorrectAnswer, runAnyGame };