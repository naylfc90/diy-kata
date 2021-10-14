const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    const result = 'I should be there in 4.5 hours.'

    expect(reachDestination(44, 10)).toBe(result);
  });
});
