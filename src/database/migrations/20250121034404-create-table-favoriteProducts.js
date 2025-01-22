"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("favoriteProducts", {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      user: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      products: {
        type: Sequelize.DataTypes.BIGINT,
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
    await queryInterface.dropTable("favoriteProducts");
  },
};
