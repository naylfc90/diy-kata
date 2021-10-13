const booleanToWord = boolean => {
  const isTrue = boolean === true;

  if (isTrue) {
    return "Yes";
  }
  return "No";
};

module.exports = booleanToWord;
