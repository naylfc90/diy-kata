const numberToReversedDigits = number => {
  const numStr = number.toString();
  const numArr = Array.from(numStr).map(Number);
  const reversed = numArr.reverse();

  return reversed;
};

module.exports = numberToReversedDigits;
