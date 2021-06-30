const database = require("../database/models");

const ProfessorService = {
  createTurma: async (codigo, titulo) => {
    const newTurma = await database.Turma.create({
      codigo,
      titulo,
    });
    return newTurma;
  },
};

module.exports = ProfessorService;
