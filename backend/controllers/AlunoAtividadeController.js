const AlunoAtividadeService = require('../services/AlunoAtividadeService');
const UserService = require('../services/UserService');
const AlunoTurmaService = require('../services/AlunoTurmaService');

const AlunoAtividadeController = {
    index: (req, res) => {
        return res.render('aluno-atividades-dashboard');
    },
    getAllActivities: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser } = req.user;
        const data = await AlunoAtividadeService.getActivities(idTurma);
        const subscribed = await AlunoAtividadeService.getSubscribed(idUser);
        const student = await UserService.getById(idUser);
        const classes = await AlunoTurmaService.getClassById(idTurma);

        return res.render('aluno-atividades-dashboard', 
        { 
            data,
            subscribed,
            student,
            classes
        });
    },
    getActivityById: async (req, res) => {
        const { id, idTurma } = req.params;
        const { idUser } = req.user;
        const data = await AlunoAtividadeService.getActivityById(id);
        const student = await UserService.getById(idUser);
        const classes = await AlunoTurmaService.getClassById(idTurma);

        return res.render('aluno-atividade-dashboard', 
        {
            data,
            student,
            classes
        });
    },
    sendActivity: async (req, res) => {    
        const { id, idTurma } = req.params;
        const { textField } = req.body;
        await AlunoAtividadeService.sendActivity(id, textField);
        
        return res.redirect(`/dashboard/aluno/turmas/${idTurma}/atividades`);
    },
    createAssociation: async (req, res) => {
        const { idAtividade } = req.params;
        const { idUser } = req.user;
        const atividade = await AlunoAtividadeService.createAssociation(idUser, idAtividade);
        return res.json(atividade);
    },
    destroyAssociation: async (req, res) => {
        const { id } = req.params;
        const destroyed = await AlunoAtividadeService.destroy(id);
        return res.json(destroyed);
    }
};

module.exports = AlunoAtividadeController;
