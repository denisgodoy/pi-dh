const database = require('../database/models/index');

const AlunoAtividadeService = {
  getSentActivity: async (id) => {
    const activityByPk = await database.AtividadeAluno.findByPk(id, {
      attributes: ['textField']
    })
    return activityByPk; 
  },
  sendActivity: async (id, textField) => {
    await database.AtividadeAluno.update({
      textField
    },
    {
      where: { id },
    });
    const sentActivity = await this.getSentActivity(id);
    return sentActivity;
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
  }
};

module.exports = AlunoAtividadeService;
