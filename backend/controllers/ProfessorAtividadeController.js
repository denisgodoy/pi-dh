const ProfessorAtividadeService = require('../services/AlunoAtividadeService');
const ProfessorTurmaService = require('../services/AlunoTurmaService');

const ProfessorAtividadeController = {
    getAllActivities: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser, nome } = req.user;
        const data = await ProfessorAtividadeService.getUniqueActivity(idUser, idTurma);
        const classes = await ProfessorTurmaService.getClassById(idTurma);

        return res.render('dashboard-professor/dashboard-atividades', 
        { 
            data,
            nome,
            classes
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
    // destroyAssociation: async (req, res) => {
    //     const { idTurma } = req.params;
    //     const { id } = req.params;
    //     await AlunoAtividadeService.destroyAssociation(id);
    //     return res.redirect(`/dashboard/aluno/turmas/${idTurma}/atividades`);
    // }
};

module.exports = ProfessorAtividadeController;
