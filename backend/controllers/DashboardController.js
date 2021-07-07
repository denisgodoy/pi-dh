const UserService = require('../services/UserService');
const AlunoAtividadeService = require('../services/AlunoAtividadeService');
const AlunoTurmaService = require('../services/AlunoTurmaService');
const { sequelize } = require('../database/models');

const DashboardController = {
    indexAluno: async (req, res) => {
        const { idUser } = req.params;
        const student = await UserService.getById(idUser);
        const classes = await AlunoTurmaService.getClasses(idUser);  

        return res.json(classes);
        return res.render('aluno-dashboard', 
        { 
            student,
            classes
        });
    },
    indexProfessor: (req, res) => {
        return res.render('professor-dashboard');
    }
};

module.exports = DashboardController;