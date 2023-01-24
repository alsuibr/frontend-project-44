
const getRandomNumber = (min, max) => {     //probably will be used in each game 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

export  { getRandomNumber } ;