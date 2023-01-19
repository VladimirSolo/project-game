const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const testUser = {
      name: 'test',
      password: await bcrypt.hash('qwerty', 10),
      score: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const testUser2 = {
      name: 'vova',
      password: await bcrypt.hash('123', 10),
      score: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await queryInterface.bulkInsert('Users', [
      testUser,
      testUser2,
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
