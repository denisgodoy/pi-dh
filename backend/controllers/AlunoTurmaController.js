const AlunoTurmaService = require("../services/AlunoTurmaService");
const UserService = require('../services/UserService');

const AlunoTurmaController = {
    index: (req, res) => {
        return res.render('aluno-turmas-dashboard');
    },
    getAllClasses: async (req, res) => {
        const { idUser } = req.user;
        const student = await UserService.getById(idUser);
        const data = await AlunoTurmaService.getClasses(idUser);

        return res.render('aluno-turmas-dashboard', 
        { 
            student,
            data 
        });
    },
    getClassById: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser } = req.user;
        const student = await UserService.getById(idUser);
        const data = await AlunoTurmaService.getClassById(idTurma);

        return res.render('aluno-turma-dashboard', 
        { 
            student,
            data 
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
        const { id } = req.params;
        const destroyed = await AlunoTurmaService.destroy(id);
        return res.json(destroyed);
    }
};

module.exports = AlunoTurmaController;
