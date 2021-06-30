"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("atividade", {
      idAtividade: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(450),
        allowNull: false,
      },
      pontuacao: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      dataInicio: {
        type: Sequelize.DATE(),
        allowNull: false,
      },
      dataTermino: {
        type: Sequelize.DATE(),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("atividade");
  },
};
