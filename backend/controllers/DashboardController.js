const AlunoTurmaService = require('../services/AlunoTurmaService');

const DashboardController = {
    indexStudent: async (req, res) => {
        const { idUser, nome } = req.user;
        const data = await AlunoTurmaService.getClasses(idUser);

        return res.render('dashboard-student/main-dash', 
        { 
            nome,
            data
        });
    },
    indexProfessor: async (req, res) => {
        const { idUser, nome } = req.user;
        // const data = await AlunoTurmaService.getClasses(idUser);
        // const sum = await RankingService.getRanking(idUser);
        return res.render('dashboard-professor/dashboard-avaliacoes', 
        { 
            nome
        });
    },
    redirect: (req, res) => {
        res.redirect('/dashboard/aluno');
    }
};

module.exports = DashboardController;