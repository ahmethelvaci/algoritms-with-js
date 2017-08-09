const factorialize = require('../../../src/algoritms/basic/factorialize');

test('is returned factorialize', () => {
  expect(factorialize(5)).toBe(120);
  expect(factorialize(10)).toBe(3628800);
  expect(factorialize(20)).toBe(2432902008176640000);
  expect(factorialize(0)).toBe(1);
});
