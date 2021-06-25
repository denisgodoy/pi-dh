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
  createTurma: async (titulo) => {
    const novaTurma = await database.Turma.create({ titulo });
    return novaTurma;
  }
};

module.exports = AlunoTurmaService;