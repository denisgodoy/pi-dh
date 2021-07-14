const database = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const AlunoAtividadeService = {
  getSubscribed: async (idUser, idTurma) => {
    const subscribed = await database.sequelize.query(
      `SELECT * FROM atividade
      JOIN 
      (
        SELECT * FROM atividade_aluno
        WHERE idUser = ${idUser} AND idAtividade IN
      (
        SELECT atividade_turma.idAtividade
        FROM atividade_turma
        WHERE idTurma = ${idTurma}
      )
      ) AS AtividadeTurma 
      ON atividade.idAtividade = AtividadeTurma.idAtividade
      `,
      { type: QueryTypes.SELECT }
    );

    return subscribed;
  },
  getActivities: async (idTurma) => {
    const activities = await database.AtividadeTurma.findAll({
      where: { idTurma },
      include: [{ model: database.Atividade }]
    });
    return activities;
  },
  getActivityById: async (id) => {
    const activityById = await database.AtividadeAluno.findByPk(id, {
      include: [{ model: database.Atividade }]
    });
    return activityById;
  },
  getSentActivity: async (id) => {
    const activityByPk = await database.AtividadeAluno.findByPk(id, {
      attributes: ['textField']
    })
    return activityByPk; 
  },
  sendActivity: async (id, textField) => {
    const sent = await database.AtividadeAluno.update({
      textField
    },
    {
      where: { id },
    });
    return sent;
  },
  createAssociation: async (idUser, idAtividade) => {
    const associateToActivity = await database.AtividadeAluno.create({
      idUser,
      idAtividade
    });
    return associateToActivity;
  },
  destroyAssociation: async (id) => {
    const destroyedAssociation = await database.AtividadeAluno.destroy({ where: { id } });
    return destroyedAssociation;
  },
  getActivity: async (idAtividade) => {
    const activity = await database.Atividade.findOne({ where: { idAtividade }});
    return activity;
  },
  getUniqueActivity: async (idUser, idTurma) => {
    const uniqueActivity = await database.sequelize.query(
      `SELECT * FROM atividade
      WHERE atividade.idAtividade IN
      (
        SELECT atividade_turma.idAtividade
        FROM atividade_turma
        WHERE idTurma = ${idTurma} AND idAtividade NOT IN 
      (
        SELECT atividade_aluno.idAtividade
        FROM atividade_aluno
        WHERE idUser = ${idUser}
      )
      )`,
      { type: QueryTypes.SELECT }
    );

    return uniqueActivity;
  }
};

module.exports = AlunoAtividadeService;
