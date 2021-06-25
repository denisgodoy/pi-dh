const database = require('../database/models/index');

const AlunoAtividadeService = {
  getAtividades: async (id) => {
    const atividade = await database.Atividade.findAll({
      where: idUser == id
    });
    return atividade;
  },
  getAtividadeById: async (idAtividade) => {
    const atividadeId = await database.Atividade.findByPk(idAtividade);
    return atividadeId;
  },
  sendAtividade: async (idAtividade, textArea) => {
    const sendAtividade = await database.Atividade.save({
        idAtividade,
        textArea
    });
    return sendAtividade;
  }
};

module.exports = AlunoAtividadeService;