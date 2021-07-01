const database = require('../database/models/index');

const AlunoTurmaService = {
  getTurmas: async (id) => {
    const turma = await database.Turma.findAll({
      where: idUser == id
    });
    return turma;
  },
  getTurmaById: async (idTurma) => {
    const turmaId = await database.Turma.findByPk(idTurma);
    return turmaId;
  },
  getAllAtividades: async (idUser) => {
    const atividade = await database.Turma.findAll({
      where: { idUser },
      include: [{ model: database.Atividade }]
    });
    return atividade;
  },
  createTurma: async (titulo) => {
    const novaTurma = await database.Turma.create({ titulo });
    return novaTurma;
  },
  createAssociation: async (idUser, idTurma) => {
    const associate = await database.TurmaAluno.create({
      idUser,
      idTurma
    });
    return associate;
  },
  destroy: async (id) => {
    const destroyed = await database.TurmaAluno.destroy({ where: { id } });
    return destroyed;
  }
};

module.exports = AlunoTurmaService;
