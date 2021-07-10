const AlunoTurmaService = require("../services/AlunoTurmaService");

const AlunoTurmaController = {
    index: (req, res) => {
        return res.render('turmas');
    },
    getAllClasses: async (req, res) => {
        const { idUser } = req.params;
        const classes = await AlunoTurmaService.getTurmas(idUser);
        return res.send(classes);
    },
    getClassById: async (req, res) => {
        const { idTurma } = req.params;
        const classById = await AlunoTurmaService.getTurmaById(idTurma);
        return res.send(classById);
    },
    createAssociation: async (req, res) => {
        const { idUser, idTurma } = req.params;
        const association = await AlunoTurmaService.createAssociation(idUser, idTurma);
        return res.json(association)
    },
    destroyAssociation: async (req, res) => {
        const { id } = req.params;
        const destroyed = await AlunoTurmaService.destroy(id);
        return res.json(destroyed);
    }
};

module.exports = AlunoTurmaController;