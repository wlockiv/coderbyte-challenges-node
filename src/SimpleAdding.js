export default input => {
  let sum = 0;
  for (let i = input; i > 0; i--) {
    sum += i;
  }

  return sum;
};
