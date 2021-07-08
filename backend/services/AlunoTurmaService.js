const database = require('../database/models/index');

const AlunoTurmaService = {
  getClasses: async (idUser) => {
    const classes = await database.TurmaAluno.findAll({
      where: { idUser },
      include: [{ 
        model: database.Turma, 
        attributes: ['idTurma', 'titulo', 'codigo'] 
      }]
    });
    return classes;
  },
  getClassById: async (idTurma) => {
    const classId = await database.Turma.findByPk(idTurma);
    return classId;
  },
  getAllActivities: async (idTurma) => {
    const activity = await database.Turma.findAll({
      where: { idTurma },
      include: [{ model: database.Atividade }]
    });
    return activity;
  },
  getActivityById: async (idAtividade) => {
    const activityById = await database.Turma.findOne({
      where: { idAtividade },
      include: [{ model: database.Atividade }]
    });
    return activityById;
  },
  createAssociation: async (idUser, idTurma) => {
    const associate = await database.TurmaAluno.create(
      {
        idUser,
        idTurma
      }
    );
    return associate;
  },
  destroyAssociation: async (id) => {
    const destroyed = await database.TurmaAluno.destroy({ where: { id } });
    return destroyed;
  }
};

module.exports = AlunoTurmaService;
