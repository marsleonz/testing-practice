import caesarCipher from "./caesarCipher";

describe("caesarCipher", () => {
  test("test1", () => {
    expect(caesarCipher("aSdfz", 1)).toBe("bTega");
  });
});
