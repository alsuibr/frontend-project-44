import readlineSync from 'readline-sync';

export const askNameAndGreet = () => {
const playerName = readlineSync.question('May i have your name? ');
console.log('Hello, ' + playerName + '!');
};



