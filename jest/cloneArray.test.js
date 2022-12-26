const cloneArray = require("./cloneArray");

test("Properly clones an array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
});
