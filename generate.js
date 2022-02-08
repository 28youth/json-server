module.exports = function(){
  const _ = require("lodash");
  const { faker } = require('@faker-js/faker');
  // faker.locale = 'zh_CN';

  return {
    users: _.times(10, function(n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('13#########')
      }
    }),
  }
}