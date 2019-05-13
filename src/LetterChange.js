export default str => {
  let splitStr = str.split('');

  const newStr = splitStr
    .map(char => {
      if (char === 'z' || char === 'Z') {
        return 'A';
      } else if (!/[a-zA-Z]/g.test(char)) {
        return char;
      } else if (isNaN(char)) {
        char = String.fromCharCode(char.charCodeAt(0) + 1);
      }

      if (/[aeiou]/g.test(char)) {
        char = char.toUpperCase();
      }

      return char;
    })
    .join('');

  return newStr;
};
