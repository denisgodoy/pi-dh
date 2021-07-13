const database = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const RankingService = {
    getRanking: async (idUser) => {
        const rankPoints = await database.sequelize.query(
            `SELECT SUM(evaluation) sumEvaluation
            FROM atividade_aluno
            WHERE idUser = ${idUser}`,
            { type: QueryTypes.SELECT }
        );

        return rankPoints;
    }
};

module.exports = RankingService;
