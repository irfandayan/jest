const subtract = require("./subtract");

test("properly substracting two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});
