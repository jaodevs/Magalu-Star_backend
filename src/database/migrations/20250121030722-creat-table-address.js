"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("address", {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
      },
      user: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      cep : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      neighborhood: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      deletedAt: Sequelize.DataTypes.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("address");
  },
};
