import readlineSync from 'readline-sync';

let playerName;
const gameIntro = () => {
    console.log("Welcome to the Brain Games!");
    playerName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + playerName + '!');
};

export { gameIntro, playerName };
