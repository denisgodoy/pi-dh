const ProfessorAtividadeService = require('../services/ProfessorAtividadeService');
const ProfessorTurmaService = require('../services/ProfessorTurmaService');

const ProfessorAtividadeController = {
    getAllActivities: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser, nome } = req.user;
        const data = await ProfessorAtividadeService.getActivities(idTurma);

        return res.render('dashboard-professor/dashboard-atividades', 
        { 
            data,
            nome
        });
    },
    getActivityById: async (req, res) => {
        const { id, idTurma } = req.params;
        const { nome } = req.user;
        const data = await ProfessorAtividadeService.getActivityById(id);
        const classes = await ProfessorTurmaService.getClassById(idTurma);

        return res.render('dashboard-student/activity-dash', 
        {
            data,
            nome,
            classes
        });
    },
    // createAssociation: async (req, res) => {
    //     const { idAtividade, idTurma } = req.params;
    //     const { idUser } = req.user;
    //     await AlunoAtividadeService.createAssociation(idUser, idAtividade);
    //     return res.redirect(`/dashboard/aluno/turmas/${idTurma}/atividades`);
    // },
    destroyClass: async (req, res) => {
        const { idTurma } = req.params;
        const { nome } = req.user;
        await ProfessorTurmaService.destroyClass(idTurma);
        const classes = await ProfessorTurmaService.getClassById(idTurma);
        return res.render('dashboard-professor/dashboard-atividades', 
        { 
            nome,
            classes
        });
    }
};

module.exports = ProfessorAtividadeController;
