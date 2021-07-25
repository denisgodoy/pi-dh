const database = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const AlunoTurmaService = {
  getClasses: async (idUser) => {
    const classes = await database.TurmaAluno.findAll({
      where: { idUser },
	  order: [['Turma', 'titulo', 'ASC']],
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
  destroyAssociation: async (idTurma) => {
    const destroyed = await database.TurmaAluno.destroy({ where: { idTurma }});
    return destroyed;
  },
  getTotalClassmates: async (idTurma) => {
    const classmates = await database.sequelize.query(
        `SELECT COUNT(idTurma) AS count 
        FROM turma_aluno AS TurmaAluno 
        WHERE TurmaAluno.idTurma = ${idTurma}`,
        { type: QueryTypes.SELECT }
    );
    return classmates;
  },
};

module.exports = AlunoTurmaService;
