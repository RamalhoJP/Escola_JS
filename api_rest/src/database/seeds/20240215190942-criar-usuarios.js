const bcrypt = require('bcryptjs');

// usando o comando npx sequelize seed:db:all insere todos esses dados no banco para teste

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'João Pedro Ramalho',
      email: 'joaopedroramalho@email.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Ana Luiza',
      email: 'analuiza@email.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
