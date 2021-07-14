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
    getRanking: async (idTurma) => {
        const ranking = await database.sequelize.query(
            `SELECT user.nome, user.sobrenome, Ranking.sumEvaluation 
            FROM user
            JOIN 
            (
                SELECT idUser, SUM(evaluation) sumEvaluation
                FROM atividade_aluno
                WHERE idAtividade IN 
            (
                SELECT atividade_turma.idAtividade
                FROM atividade_turma
                WHERE idTurma = ${idTurma}
            )
            GROUP BY idUser
            ) AS Ranking 
            ON user.idUser = Ranking.idUser
            ORDER BY Ranking.sumEvaluation DESC, user.nome ASC`,
            { type: QueryTypes.SELECT }
        );

        return ranking;
    }
};

module.exports = RankingService;
