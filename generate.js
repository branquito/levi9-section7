module.exports = function() {
  const faker = require('faker')
  const _ = require('lodash')
  return {
    cars: _.times(50, function(n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.image.transport(),
      }
    }),
  }
}
