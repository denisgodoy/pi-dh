const AlunoTurmaService = require('../services/AlunoTurmaService');
const RankingService = require('../services/RankingService');

const DashboardController = {
    indexStudent: async (req, res) => {
        const { idUser, nome } = req.user;
        const data = await AlunoTurmaService.getClasses(idUser);
        const sum = await RankingService.getRanking(idUser);

        return res.render('dashboard-student/main-dash', 
        { 
            nome,
            data,
            sum
        });
    },
    redirect: (req, res) => {
        res.redirect('/dashboard/aluno');
    },
    indexProfessor: (req, res) => {
        return res.render('professor-dashboard');
    }
};

module.exports = DashboardController;