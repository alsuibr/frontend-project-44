import readlineSync from 'readline-sync';

export const playerName = readlineSync.question('May I have your name? ');
const askNameAndGreet = () => {
console.log('Hello, ' + playerName + '!');
};

export default askNameAndGreet;

