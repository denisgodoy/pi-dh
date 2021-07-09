const UserService = require('../services/UserService');
const AlunoTurmaService = require('../services/AlunoTurmaService');

const DashboardController = {
    indexStudent: async (req, res) => {
        const { idUser } = req.params;
        const student = await UserService.getById(idUser);
        const data = await AlunoTurmaService.getClasses(idUser);

        return res.render('aluno-dashboard', 
        { 
            student,
            data
        });
    },
    indexProfessor: (req, res) => {
        return res.render('professor-dashboard');
    }
};

module.exports = DashboardController;