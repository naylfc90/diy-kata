const joinNames = namesObj => {
  let combinedNames = [];
  const comma = ", ";
  const lastName = " & ";

  for (let i = 0; i < namesObj.length; i += 1) {
    combinedNames += namesObj[i].name;
    if (i === namesObj.length - 2) {
      combinedNames += lastName;
    } else if (i !== namesObj.length - 2 && i !== namesObj.length - 1) {
      combinedNames += comma;
    }
  }
  return combinedNames;
};

module.exports = joinNames;
