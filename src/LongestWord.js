export default sen => {
  const senNoPuncuation = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  const words = senNoPuncuation.split(' ');
  words.sort((word, nextWord) => nextWord.length - word.length);

  return words[0];
};
