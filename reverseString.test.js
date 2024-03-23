import reverseString from "./reverseString";

describe("reverse string", () => {
  test("string reverse", () => {
    expect(reverseString("Hi how are you")).toBe("uoy era woh iH");
  });
  test("string reverse", () => {
    expect(reverseString("")).toBe("");
  });
});
