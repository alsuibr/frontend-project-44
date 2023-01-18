import readlineSync from 'readline-sync';
import { playerName } from "../src/cli.js";
import gameIntro from "../src/cli.js";

const gameEven = () => {
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < 3; i = i + 1) {

    let randomNumber = getRandomNumber(1, 101);
    console.log(`Question: ${randomNumber}`);

    let usersAnswer;
    const getAnswer = () => {
        usersAnswer = readlineSync.question(`Your answer: `);
    }
    getAnswer();

    let correctAnswer;
    randomNumber % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';

    if (usersAnswer !== correctAnswer) {
        console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
        break;
        i === 3;
    }

    if (usersAnswer === correctAnswer) {
        console.log('Correct!');
    }

    if (i === 2) {
        console.log(`Congratulations, ${ playerName }!`);
    }
}
};

gameIntro();
gameEven();

export { gameEven };

