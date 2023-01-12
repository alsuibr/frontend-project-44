import readlineSync from 'readline-sync';
import welcomingMessage from './brain-games.js';
import askNameAndGreet from '../src/cli.js';
import { playerName } from '../src/cli.js';

welcomingMessage();
askNameAndGreet();

const evenGameRules = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
}

let randomNumber;
const getRandomNumber = (min, max) => {
    randomNumber = Math.random() * (max - min) + min;
}

const questionForEvenGame = "Question: " + randomNumber;

const usersAnswer = readlineSync.question(questionForEvenGame);

const showUsersAnswer = "Your answer: " + usersAnswer;

let correctAnswer;
randomNumber.isEven() ? correctAnswer = 'yes' : correctAnswer = 'no';

const evenRoundWonMessage = () => {
    console.log('Correct!');
}

const evenFailedMessage = () => {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`)
}

const evenUltimateWinMessage = () => {
    console.log(`Congratulations, ${playerName}!`)
}

const playEven = () => {
    evenGameRules();
    for (let i = 0; i < 3; i = i + 1) {
        getRandomNumber(1, 101);
        console.log(questionForEvenGame);
        console.log(showUsersAnswer);
        if (correctAnswer !== usersAnswer) {
            evenFailedMessage();
            break;
        }
        else {
            evenRoundWonMessage();
        }
    }
    evenUltimateWinMessage();
}

playEven();







