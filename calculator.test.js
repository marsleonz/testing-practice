import calculator from "./calculator";

describe("calculator", () => {
  test("add", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test("subtract", () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });
  test("multiply", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test("divide", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });
});
