const database = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const ProfessorTurmaService = {
  getClasses: async () => {
    const classes = await database.sequelize.query(
      `SELECT Turma.idturma, Turma.codigo, Turma.titulo
      FROM turma
      INNER JOIN turma_professor ON Turma.idturma=turma_professor.idturma;
      `,
      { type: QueryTypes.SELECT }
    );
    return classes;
  },
  createClass: async (codigo, titulo) => {
    const newClass = await database.Turma.create({
      codigo,
      titulo
    }
      );
      return newClass.idTurma;
  },
  updateClass: async (idTurma, codigo, titulo) => {
    const newClass = await database.Turma.update({
      codigo,
      titulo
    }, {
      where: { idTurma }
    }
      );
      return newClass;
  },
  createAssociationClassProfessor: async (idUser, idTurma) => {
    
    const associateToClass = await database.TurmaProfessor.create({
      idUser,
      idTurma
    }
      );
      return associateToClass;
  },
  getById: async (idTurma) => {
    return await database.Turma.findByPk(idTurma, {
      attributes: [
        'idturma',
        'codigo',
        'titulo',
      ],
    });
  },
  destroyClass: async (idTurma) => {
    const destroyed = await database.Turma.destroy({ where: { idTurma }});
    return destroyed;
  },
  destroyAssociationProfessorClass: async (idTurma) => {
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
