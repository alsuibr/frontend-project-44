import readlineSync from 'readline-sync';

export const getPlayerNameAndGreet = () => {
    const playerName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + playerName + '!')
};

getPlayerNameAndGreet();

getPlayerNameAndGreet;