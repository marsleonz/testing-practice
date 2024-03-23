import capitalize from "./capitalize";

describe("capitalize", () => {
  test("first character capitalize", () => {
    const str = "asdfg";
    expect(capitalize(str)).toBe("Asdfg");
  });
  test("first character capitalize", () => {
    const str = "zxcvb";
    expect(capitalize(str)).toBe("Zxcvb");
  });
});
