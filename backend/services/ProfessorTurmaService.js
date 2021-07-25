const database = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const ProfessorTurmaService = {
  getClasses: async (idUser) => {
    const classes = await database.TurmaProfessor.findAll({
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
    const associate = await database.TurmaProfessor.create(
      {
        idUser,
        idTurma
      }
    );
    return associate;
  },
  destroyAssociation: async (idTurma) => {
    const destroyed = await database.TurmaProfessor.destroy({ where: { idTurma }});
    return destroyed;
  },
  getTotal: async (idTurma) => {
    const numberOfStudents = await database.sequelize.query(
        `SELECT COUNT(idTurma) AS count 
        FROM turma_professor AS TurmaProfessor 
        WHERE TurmaProfessor.idTurma = ${idTurma}`,
        { type: QueryTypes.SELECT }
    );
    return numberOfStudents;
  },
};

module.exports = ProfessorTurmaService;
