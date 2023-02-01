const getRandomNumber = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export default getRandomNumber;
