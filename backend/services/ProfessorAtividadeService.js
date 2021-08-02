const database = require('../database/models/index');
const { QueryTypes, Op } = require('sequelize');

const ProfessorAtividadeService = {
  getActivities: async (idTurma) => {
    const subscribed = await database.sequelize.query(
      `SELECT * FROM atividade
      JOIN 
      (
        SELECT atividade_turma.idAtividade, atividade_turma.idTurma
        FROM atividade_turma
        WHERE idTurma = ${idTurma}
      ) AS AtividadeTurma 
      ON atividade.idAtividade = AtividadeTurma.idAtividade;
      `,
      { type: QueryTypes.SELECT }
      );
      
      return subscribed;
  },

  getActivityById: async (id) => {
    const activityById = await database.Atividade.findByPk(id);
    return activityById;
  },
 
  createActivity: async (titulo, descricao, pontuacao, dataTermino) => {
    const Activity = await database.Atividade.create({
      titulo, descricao, pontuacao, dataTermino
    }
      );
      return Activity.idAtividade;
  },
  createActivityProfessorAssociation: async (idAtividade, idTurma) => {
    const associateToActivity = await database.AtividadeTurma.create({
      idAtividade,
      idTurma
    });
    return associateToActivity;
  },

  updateActivity: async (idActivity, titulo, descricao, pontuacao, dataTermino) => {
    const acitivityUpdated = await database.Atividade.update({
      titulo, descricao, pontuacao, dataTermino
    }, {
      where: { idAtividade: idActivity }
    }
      );
      return acitivityUpdated;
  },

};

module.exports = ProfessorAtividadeService;
