const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
    it("returns array of human, cat and dog years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
        expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    });
});