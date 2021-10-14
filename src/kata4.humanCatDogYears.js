const humanCatDogYears = number => {
  const human = number;

  const cat = number => {
    let countCat = 0;
    if (number === 1) {
      return (countCat += 15);
    }
    if (number === 2) {
      return (countCat += 24);
    }
    if (number > 2) {
      countCat = 24;
    }
    for (let i = 3; i <= number; i += 1) {
      countCat += 4;
    }
    return countCat;
  };

  const dog = number => {
    let countDog = 0;
    if (number === 1) {
      return (countDog += 15);
    }
    if (number === 2) {
      return (countDog += 24);
    }
    if (number > 2) {
      countDog = 24;
    }
    for (let i = 3; i <= number; i += 1) {
      countDog += 5;
    }
    return countDog;
  };

  let years = [human, cat(number), dog(number)];
  return years;
};

module.exports = humanCatDogYears;
