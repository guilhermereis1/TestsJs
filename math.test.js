const { sum, mul, sub, div } = require('./math')

// Success cases
test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2)
})
test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).toBe(1)
})
test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(0)
})
test('Dividing 1 / 1 equals 1', () => {
  expect(div(1, 1)).toBe(1)
})

// Failure cases
test('Adding 1 + 1 does not equal 3', () => {
  expect(sum(1, 1)).not.toBe(3)
})
test('Multiplying 1 * 1 does not equal 2', () => {
  expect(mul(1, 1)).not.toBe(2)
})
test('Subtracting 1 - 1 does not equal 2', () => {
  expect(sub(1, 1)).not.toBe(2)
})
test('Dividing 1 / 1 does not equal 2', () => {
  expect(div(1, 1)).not.toBe(2)
})

// For use with promises, you can use .resolves and .rejects:s
expect(Promise.resolve('lemon')).resolves.toBe('lemon')
expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus')