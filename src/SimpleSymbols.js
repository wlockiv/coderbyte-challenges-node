export default str => {
  const array = str.split('');

  if (/^[A-Za-z]|[A-Za-z]$/g.test(str)) return 'false';

  for (let i = array.length; i--; ) {
    if (
      /[a-zA-Z]/g.test(array[i]) &&
      !(array[i - 1] === '+' || array[i + 1 === '+'])
    ) {
      return 'false';
    }
  }

  return 'true';
};
