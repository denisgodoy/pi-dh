const AlunoAtividadeService = require('../services/AlunoAtividadeService');
const AlunoTurmaService = require('../services/AlunoTurmaService');

const AlunoAtividadeController = {
    getAllActivities: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser, nome } = req.user;
        const subscribed = await AlunoAtividadeService.getSubscribed(idUser, idTurma);
        const data = await AlunoAtividadeService.getUniqueActivity(idUser, idTurma);
        const classes = await AlunoTurmaService.getClassById(idTurma);

        return res.render('dashboard-student/activities', 
        { 
            data,
            subscribed,
            nome,
            classes
        });
    },
    getActivityById: async (req, res) => {
        const { id, idTurma } = req.params;
        const { nome } = req.user;
        const data = await AlunoAtividadeService.getActivityById(id);
        const classes = await AlunoTurmaService.getClassById(idTurma);

        return res.render('dashboard-student/activity-dash', 
        {
            data,
            nome,
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
        const { nome } = req.user;
        const data = await AlunoAtividadeService.getActivity(idAtividade);
        const classes = await AlunoTurmaService.getClassById(idTurma);
        return res.render('dashboard-student/accept-activity',
        {
            data,
            classes,
            nome
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
    },
    getPending: async (req, res) => {
        const { idUser, nome } = req.user;
        const pending = await AlunoAtividadeService.getPendingActivities(idUser);
        return res.render('dashboard-student/pending-activities', 
        { 
            pending,
            nome 
        });
    },
    getSent: async (req, res) => {
        const { idUser, nome } = req.user;
        const sent = await AlunoAtividadeService.getSentActivities(idUser);
        return res.render('dashboard-student/evaluated', 
        {
            sent,
            nome 
        });
    },
    getAllNew: async (req, res) => {
        const { idUser, nome } = req.user;
        const newAct = await AlunoAtividadeService.getAllNew(idUser);
        return res.render('dashboard-student/new-activities', 
        {
            nome,
            newAct
        });
    }
};

module.exports = AlunoAtividadeController;
