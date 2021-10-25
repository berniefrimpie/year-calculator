const howManyYears = require("./index");

it("Should calculate the difference between 2021 and 1992", () => {
  const difference = howManyYears(2021, 1992);
  expect(difference).toEqual(29);
});
