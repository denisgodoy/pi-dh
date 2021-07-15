const UserService = require('../services/UserService');
const AlunoTurmaService = require('../services/AlunoTurmaService');
const RankingService = require('../services/RankingService');

const DashboardController = {
    indexStudent: async (req, res) => {
        const { idUser} = req.user;
        const student = await UserService.getById(idUser);
        const data = await AlunoTurmaService.getClasses(idUser);
        const sum = await RankingService.getRanking(idUser);

        return res.render('aluno-dashboard', 
        { 
            student,
            data,
            sum
        });
    },
    indexProfessor: (req, res) => {
        return res.render('professor-dashboard');
    }
};

module.exports = DashboardController;