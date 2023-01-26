const getRandomNumber = (min, max) => {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin) + intMin);
};

export default getRandomNumber;
