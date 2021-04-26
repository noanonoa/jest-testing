const reverseString = require('./reverse-string')

// make sure the reverseString function exports successfully
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined()
})
// make sure the reverseString function actually does what it needs to
test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh')
})
// check for all cases of letter
test('String reverses (upper and lower case letters)', () => {
  expect(reverseString('HELLO')).toEqual('olleh')
})