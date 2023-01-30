//С введением второй игры у вас появляется общая для всех игр логика (Эту логику стоит поместить в файл src/index.js
//
import readlineSync from 'readline-sync';
import { gameIntro, playerName } from "../src/cli.js";

const runEngine = (gameExplanation, generateTheQuestion, getCorrectAnswer) => {
    gameIntro();
    console.log(gameExplanation);

    for (let i = 0; i < 3; i = i + 1) {

        console.log(`Question: ${generateTheQuestion()}`);
        
        let usersAnswer;
        const getUsersAnswer = () => {
            usersAnswer = readlineSync.question(`Your answer: `);
        };

        getUsersAnswer();
        
        let correctAnswer = getCorrectAnswer();

        if (usersAnswer !== correctAnswer) {
            console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
            break;
        }
        else {
            console.log('Correct!');
        }
        
        if (i === 2) {
            console.log(`Congratulations, ${ playerName }!`);
        }
    }
};

export { runEngine };