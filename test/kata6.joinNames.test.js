const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const simpsonsObj = [
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" }
    ];
    const simpsonsObj2 = [
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" },
      { name: "Homer" },
      { name: "Marge" }
    ];

    expect(joinNames(simpsonsObj)).toBe("Bart, Lisa & Maggie");
    expect(joinNames(simpsonsObj2)).toBe("Bart, Lisa, Maggie, Homer & Marge");
  });
});
