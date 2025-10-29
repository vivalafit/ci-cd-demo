const { sum } = require("../src/sum");

test("adds two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

test("throws on non-numbers", () => {
  expect(() => sum("2", 3)).toThrow(/nums only/);
});
