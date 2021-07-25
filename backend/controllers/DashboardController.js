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
    redirect: (req, res) => {
        res.redirect('/dashboard/aluno');
    },
    indexProfessor: (req, res) => {
        return res.render('professor-dashboard');
    }
};

module.exports = DashboardController;