import { getRandomNumber } from "../src/utils.js";

const array = ['a', 'b', 'c', 'd'];
const array2 = [... array]
array2[1] = 'z';
console.log(array);
console.log(array2);
