//just draft to try running smaller pieces of code. ignore.
import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let randomNumber = getRandomNumber(1,101);
console.log(`Question: ${randomNumber}`);
const askTheQuestonAndDisplay = () => {
    let usersAnswer = readlineSync.question(`Your answer: `);
}

askTheQuestonAndDisplay();