const database = require('../database/models/index');
const { QueryTypes, Op } = require('sequelize');

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
  },
  getPendingActivities: async (idUser) => {
    const pending = await database.AtividadeAluno.findAll(
      { 
        where: { idUser, evaluation: null },
        include: [{ model: database.Atividade, as: 'Atividade',
            where: 'Atividade'.idAtividade,
            include: [{ model: database.AtividadeTurma }]
        }]
      }
    );
    return pending;
  },
  getSentActivities: async (idUser) => {
    const sent = await database.AtividadeAluno.findAll(
      { 
        where: { idUser, evaluation: {[Op.ne]: null} },
        include: [{ model: database.Atividade, as: 'Atividade',
            where: 'Atividade'.idAtividade,
            include: [{ model: database.AtividadeTurma }]
        }]
      }
    );
    return sent;
  },
  getAllNew: async (idUser) => {
    const uniqueActivity = await database.sequelize.query(
      `SELECT atividade_turma.idTurma, tbl.* 
      FROM atividade_turma 
      JOIN 
      (
        SELECT * FROM atividade
        WHERE atividade.idAtividade NOT IN
      (
        SELECT atividade_aluno.idAtividade
        FROM atividade_aluno
        WHERE idUser = ${idUser}
      )) AS tbl
      ON atividade_turma.idAtividade = tbl.idAtividade`,
      { type: QueryTypes.SELECT }
    );

    return uniqueActivity;
  },
};

module.exports = AlunoAtividadeService;
