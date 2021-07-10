const ProfessorAtividadeService = require('../services/ProfessorAtividadeService');

const DashboardController = {
    indexAluno: (req, res) => {
        return res.render('aluno-dashboard');
    },
    indexProfessor: (req, res) => {
        return res.render('aluno-dashboard');
    },
    indexAtividades: async (req, res)=>{
        const atividades = await ProfessorAtividadeService.getAtividades();
        return res.render('dashboard-professor/dashboard-atividades', {atividades});
    },
    criarAtividade: async (req,res)=>{
        const {titulo, descricao, pontuacao, dataInicio, dataTermino} = req.body;
        const atividade = await ProfessorAtividadeService.createAtividade(titulo, descricao, pontuacao, dataInicio, dataTermino);
        return res.json(atividade);
        // return res.render('dashboard-professor/dashboard-atividades-criar');
    },
    deletarAtividade: async (req, res) => {
        const { id } = req.params;
        const destroyedAtividade = await ProfessorAtividadeService.destroyAtividade(id);
        return res.json(destroyedAtividade);
    }
};

module.exports = DashboardController;