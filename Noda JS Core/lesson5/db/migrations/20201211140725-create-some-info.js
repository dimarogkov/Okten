module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [
          {
            id: 1,
            name: 'dima',
            age: 25,
            email: 'dima@gmail.com',
            password: 'dima123',
          },
          {
            id: 2,
            name: 'joker',
            age: 23,
            email: 'joker@gmail.com',
            password: 'joker11111',
          },
          {
            id: 3,
            name: 'admin',
            age: 22,
            email: 'admin@gmail.com',
            password: '123456',
          }
      ]);

      await queryInterface.bulkInsert('cars', [
          {
            id: 1,
            model: 'BMW',
            price: "30000",
            user_id: 1
          },
          {
            id: 2,
            model: 'mers',
            price: "50000",
            user_id: 2
          },
          {
            id: 3,
            model: 'audi',
            price: "20000",
            user_id: 3
          }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('cars', null);
      await queryInterface.bulkDelete('users', null);
  }
};