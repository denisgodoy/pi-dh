const database = require('../database/models/index');

const AlunoAtividadeService = {
  getAtividades: async (idUser) => {
    const atividade = await database.AtividadeAluno.findAll({
      where: { idUser },
      include: [{ model: database.Atividade }]
    });
    return atividade;
  },
  getAtividadeById: async (idAtividade) => {
    const atividadeId = await database.AtividadeAluno.findOne({
      where: { idAtividade },
      include: [{ model: database.Atividade }]
    });
    return atividadeId;
  },
  sendAtividade: async (id, textField) => {
    await database.AtividadeAluno.update({
      textField
    },
    {
      where: { id },
    });
    const sendAtividade = await database.AtividadeAluno.findByPk(id, {
      attributes: ['textField']
    })
    return sendAtividade;
  },
  createAtividade: async (titulo, descricao, pontuacao, dataInicio, dataTermino) => {
    const newAtividade = await database.Atividade.create({
      titulo,
      descricao,
      pontuacao,
      dataInicio,
      dataTermino
    });
    return newAtividade;
  },
  createAssociation: async (idUser, idAtividade) => {
    const associate = await database.AtividadeAluno.create({
      idUser,
      idAtividade
    });
    return associate;
  }
};

module.exports = AlunoAtividadeService;
