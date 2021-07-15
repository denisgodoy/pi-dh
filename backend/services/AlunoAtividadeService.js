const database = require('../database/models/index');
const { Op } = require('Sequelize')

const AlunoAtividadeService = {
  getSubscribed: async (idUser) => {
    const subscribed = await database.AtividadeAluno.findAll({
      where: { idUser },
      include: [{ model: database.Atividade }]
    });
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
  }
};

module.exports = AlunoAtividadeService;
