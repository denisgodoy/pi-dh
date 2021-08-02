const ProfessorAtividadeService = require('../services/ProfessorAtividadeService');
const ProfessorTurmaService = require('../services/ProfessorTurmaService');

const ProfessorAtividadeController = {
    getAllActivitiesByClass: async (req, res) => {
        const { idUser, nome } = req.user;
        const { idTurma } = req.params;
        const data = await ProfessorAtividadeService.getActivities(idTurma);
        return res.render('dashboard-professor/dashboard-atividades', 
        { 
            nome,
            data,
            idTurma
        });
    },
    getActivityById: async (req, res) => {
        const { idAtividade} = req.params;
        const { nome } = req.user;
        const data = await ProfessorAtividadeService.getActivityById(idAtividade);
        return res.render('dashboard-professor/dashboard-atividades', 
        {
            data,
            nome,
        });
    },

    createActivity: async (req, res) => {

        const {idTurma} = req.params;
        return res.render('dashboard-professor/dashboard-atividades-criar', 
        {
            idTurma
        });
    },

    
    updateFormActivity: async (req, res) => {

        const {idAtividade} = req.params;
        const data = await ProfessorAtividadeService.getActivityById(idAtividade);
        return res.render('dashboard-professor/dashboard-atividades-editar', 
        {
            idAtividade,
            data,
        
        });
    },

    sendActivity: async (req, res)=>{
        if(!req.body){
            res.status(400).send({message: "Teste: dados não estão vindo do formulário!"})
        }
        const { titulo, descricao, pontuacao, dataTermino } = req.body;
        const {idTurma} = req.params;
        const idAtividade = await ProfessorAtividadeService.createActivity( titulo, descricao, pontuacao, dataTermino);
        await ProfessorAtividadeService.createActivityProfessorAssociation(idAtividade, idTurma);
        res.redirect(`/dashboard/professor/atividades/${idTurma}`);
    },

    updateActivity: async (req, res)=>{
        if(!req.body){
            res.status(400).send({message: "Teste: dados não estão vindo do formulário!"})
        }
        const { titulo, descricao, pontuacao, dataTermino } = req.body;
        const {idAtividade} = req.params;
        await ProfessorAtividadeService.updateActivity( idAtividade, titulo, descricao, pontuacao, dataTermino);
     
        res.redirect(`/dashboard/professor/atividades/${idAtividade}`);
    },

};

module.exports = ProfessorAtividadeController;
