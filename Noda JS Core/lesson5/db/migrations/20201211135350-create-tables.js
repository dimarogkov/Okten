module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
      });

      await queryInterface.createTable('cars', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          model: {
              type: Sequelize.STRING,
              allowNull: false
          },
          price: {
              type: Sequelize.INTEGER,
              allowNull: false
          },
          user_id: {
              type: Sequelize.INTEGER,
              foreignKey: true,
              allowNull: false,
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
              references: {
                  model: 'users',
                  as: 'user',
                  key: 'id'
              }
          }
      });
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('cars');
      await queryInterface.dropTable('users');
  }
};