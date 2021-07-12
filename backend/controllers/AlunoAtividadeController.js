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
    enrollActivity: async (req, res) => {
        const { idAtividade, idTurma } = req.params;
        const { idUser } = req.user;
        const data = await AlunoAtividadeService.getActivity(idAtividade);
        const student = await UserService.getById(idUser);
        const classes = await AlunoTurmaService.getClassById(idTurma);
        return res.render('aluno-aceitar-dashboard',
        {
            data,
            classes,
            student
        });
    },
    createAssociation: async (req, res) => {
        const { idAtividade, idTurma } = req.params;
        const { idUser } = req.user;
        await AlunoAtividadeService.createAssociation(idUser, idAtividade);
        return res.redirect(`/dashboard/aluno/turmas/${idTurma}/atividades`);
    },
    destroyAssociation: async (req, res) => {
        const { idTurma } = req.params;
        const { id } = req.params;
        await AlunoAtividadeService.destroyAssociation(id);
        return res.redirect(`/dashboard/aluno/turmas/${idTurma}/atividades`);
    }
};

module.exports = AlunoAtividadeController;
