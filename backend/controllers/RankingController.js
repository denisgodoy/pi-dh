const RankingService = require('../services/RankingService');

const RankingController = {
    index: async (req, res) => {
        const { idUser } = req.user;
        const rankResult = await RankingService.getRanking(idUser);

        return res.json(rankResult);
    }
}

module.exports = RankingController;
