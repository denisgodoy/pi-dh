const AlunoTurmaService = require("../services/AlunoTurmaService");
const RankingService = require("../services/RankingService");

const AlunoTurmaController = {
    index: (req, res) => {
        return res.render('aluno-turmas-dashboard');
    },
    getAllClasses: async (req, res) => {
        const { idUser, nome } = req.user;
        const data = await AlunoTurmaService.getClasses(idUser);
        const sum = await RankingService.getRanking(idUser);

        return res.render('dashboard-aluno/aluno-turmas-dashboard', 
        { 
            nome,
            data,
            sum
        });
    },
    getClassById: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser, nome } = req.user;
        const data = await AlunoTurmaService.getClassById(idTurma);
        const sum = await RankingService.getRanking(idUser);
        
        return res.render('dashboard-aluno/aluno-turma-dashboard', 
        { 
            nome,
            data,
            sum
        });
    },
    createAssociation: async (req, res) => {
        const { idUser, nome } = req.user;
        const { idTurma } = req.body;
        await AlunoTurmaService.createAssociation(idUser, idTurma);
        const data = await AlunoTurmaService.getClasses(idUser);

        return res.render('dashboard-aluno/aluno-turmas-dashboard', 
        {
            nome,
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
