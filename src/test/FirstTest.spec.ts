import User from '@models/User'

test('it should ve ok', () => {
  const user = User.build({ name: 'John', email: 'john@test.com' })
  expect(user.get('name')).toEqual('John')
})
