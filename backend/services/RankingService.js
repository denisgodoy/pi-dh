const database = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const RankingService = {
    getTotalPoints: async (idUser, idTurma) => {
        const classPoints = await database.sequelize.query(
            `SELECT SUM(evaluation) sumEvaluation
            FROM atividade_aluno
            WHERE idUser = ${idUser} AND idAtividade IN 
            (
                SELECT atividade_turma.idAtividade
                FROM atividade_turma
                WHERE idTurma = ${idTurma}
            )`,
            { type: QueryTypes.SELECT }
        );

        return classPoints;
    },
    getRanking: async (idUser) => {
        const ranking = await database.sequelize.query(
            `SELECT SUM(evaluation) sumEvaluation
            FROM atividade_aluno
            WHERE idUser = ${idUser}`,
            { type: QueryTypes.SELECT }
        );

        return ranking;
    }
};

module.exports = RankingService;
