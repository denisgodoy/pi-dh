const RankingService = require('../services/RankingService');
const AlunoTurmaService = require('../services/AlunoTurmaService');

const RankingController = {
    index: async (req, res) => {
        const { idTurma } = req.params;
        const rankResult = await RankingService.getRanking(idTurma);
        const classes = await AlunoTurmaService.getClassById(idTurma);

        return res.render('dashboard-aluno/aluno-ranking-dashboard', 
        {
            rankResult,
            classes
        });
    }
};

module.exports = RankingController;
