export default (num1, num2) => {
  if (num2 > num1) {
    return 'true';
  } else if (num2 < num1) {
    return 'false';
  }

  return -1;
};
