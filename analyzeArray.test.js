import analyzeArray from "./analyzeArray";

describe("analyze Array", () => {
  test("analyze", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });
  test("analyze", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual({
      average: 5,
      min: 1,
      max: 9,
      length: 9,
    });
  });
});
