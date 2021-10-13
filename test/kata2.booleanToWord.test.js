const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  test("returns true if booleanToWord is true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  test("returns false if booleanToWord is false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
