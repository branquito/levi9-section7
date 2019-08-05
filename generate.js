module.exports = function() {
  const faker = require('faker')
  const _ = require('lodash')
  return {
    images: _.times(50, function(n) {
      return {
        id: n,
        name: faker.name.findName(),
        image: faker.random.image(),
      }
    }),
  }
}
