'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photo:{
          type:Sequelize.STRING,
          allowNull:true
      },
      biography:{
          type:Sequelize.STRING(2000),
          allowNull:true
      },
      birthdate:{
          type: Sequelize.STRING,
          allowNull: false
      },
      phone:{
          type: Sequelize.STRING,
          allowNull: false
      },
      gender:{
          type: Sequelize.STRING,
          allowNull: false
      },
      email:{
          type: Sequelize.STRING,
          allowNull: false
      },
      password:{
          type: Sequelize.STRING,
          allowNull: false
      },
      username:{
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};