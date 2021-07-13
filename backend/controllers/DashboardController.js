const AlunoTurmaService = require('../services/AlunoTurmaService');
const RankingService = require('../services/RankingService');

const DashboardController = {
    indexStudent: async (req, res) => {
        const { idUser, nome } = req.user;
        const data = await AlunoTurmaService.getClasses(idUser);
        const sum = await RankingService.getRanking(idUser);

        return res.render('dashboard-aluno/aluno-dashboard', 
        { 
            nome,
            data,
            sum
        });
    },
    indexProfessor: (req, res) => {
        return res.render('professor-dashboard');
    }
};

module.exports = DashboardController;