const RankingService = require('../services/RankingService');

const RankingController = {
    index: async (req, res) => {
        const { idUser, idTurma } = req.params;
        const rankResult = await RankingService.getTotalPoints(idUser, idTurma);

        return res.json(rankResult);
    }
}

module.exports = RankingController;
