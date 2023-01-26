import { getRandomNumber } from "../src/utils.js";


const getCorrectAnswer = (randomNumber1, randomNumber2) => {
    let gcd;
    let smallerNumber;
    const commonDivisors = [];

    if (randomNumber1 < randomNumber2) {
        smallerNumber = randomNumber1;
    }
    if (randomNumber2 < randomNumber1) {
        smallerNumber = randomNumber2;
    }
    if (randomNumber1 === randomNumber2) {
        gcd = randomNumber1;
        return gcd
    }

    const getGCD = () => {
        for (let i = 1; i <= (smallerNumber / 2); i = i + 1) {
            console.log(`i equals ${i}`)
            if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
                commonDivisors.push(i);
                console.log(`commonDivisors equals ${commonDivisors}`)
            }
        }
        return commonDivisors[commonDivisors.length - 1];
    }

    return (randomNumber1 % randomNumber2 === 0 || randomNumber2 % randomNumber1 === 0) ? gcd = smallerNumber : gcd = getGCD();
}

let randomNumber1 = getRandomNumber(1, 21);
let randomNumber2 = getRandomNumber(1, 21);

console.log(`${randomNumber1} ${randomNumber2}`) 
console.log(getCorrectAnswer(randomNumber1, randomNumber2));
