const getRandomNumber = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateProgression = () => {
  const progression = [];
  const stepSize = getRandomNumber(0, 6);
  const progressionLength = getRandomNumber(5, 11);
  progression.push(getRandomNumber(0, 11));

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + stepSize);
  }
  return progression;
};

export { getRandomNumber, isPrime, generateProgression };
