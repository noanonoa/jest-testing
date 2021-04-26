// Practice Jest testing (npm install jest)
// import functions module
const functions = require('./functions')
// test if functions.add calculates correctly
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})
// .not method can be used for negative testing
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})
// test if functions.isNull returns a null value
test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})
// test if functions.checkValue's argument is falsy value
test('Should be falsy', () => {
  expect(functions.checkValue(false)).toBeFalsy()
})
// .toBe compares the referential identity of values, while toEqual does a deep comparison of the properties of the values
test('User should be Noa Kim', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Noa', lastName: 'Kim'})
})
// test if total load is less than target
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})
// test regex to not match 'I'
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/)
})
// arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin']
  expect(usernames).toContain('admin')
})
// working with async data
// Promise
test('User fetched name should be Leanne Graham', () => {
  // when working with asynchronous functions, assertions verifies that a certain number of assertions are called and this is used when testing asynchronous code in order to make sure that the assertions in a callback actually get called
  expect.assertions(1)
  // if return statement is omitted, than the test will basically complete before the fetch call completes
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})
// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})