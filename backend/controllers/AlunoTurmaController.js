const AlunoTurmaService = require("../services/AlunoTurmaService");
const RankingService = require("../services/RankingService");
const UserService = require('../services/UserService');

const AlunoTurmaController = {
    index: (req, res) => {
        return res.render('aluno-turmas-dashboard');
    },
    getAllClasses: async (req, res) => {
        const { idUser } = req.user;
        const student = await UserService.getById(idUser);
        const data = await AlunoTurmaService.getClasses(idUser);
        const sum = await RankingService.getRanking(idUser);

        return res.render('aluno-turmas-dashboard', 
        { 
            student,
            data,
            sum
        });
    },
    getClassById: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser } = req.user;
        const student = await UserService.getById(idUser);
        const data = await AlunoTurmaService.getClassById(idTurma);
        const sum = await RankingService.getRanking(idUser);
        
        return res.render('aluno-turma-dashboard', 
        { 
            student,
            data,
            sum
        });
    },
    createAssociation: async (req, res) => {
        const { idUser } = req.user;
        const { idTurma } = req.body;
        const student = await UserService.getById(idUser);
        await AlunoTurmaService.createAssociation(idUser, idTurma);
        const data = await AlunoTurmaService.getClasses(idUser);

        return res.render('aluno-turmas-dashboard', 
        {
            student,
            data
        });
    },
    destroyAssociation: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser } = req.user;
        await AlunoTurmaService.destroyAssociation(idTurma, idUser);
        return res.redirect('/dashboard/aluno/turmas');
    }
};

module.exports = AlunoTurmaController;
