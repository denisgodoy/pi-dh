const AlunoAtividadeService = require('../services/AlunoAtividadeService');

const AlunoAtividadeController = {
    index: (req, res) => {
        return res.render('atividades');
    },
    getAllAtividades: async (req, res) => {
        const { idUser } = req.params;
        const atividades = await AlunoAtividadeService.getAtividades(idUser);
        return res.json(atividades);
    },
    getAtividadeById: async (req, res) => {
        const { idAtividade } = req.params;
        const atividadeById = await AlunoAtividadeService.getAtividadeById(idAtividade);
        return res.json(atividadeById);
    },
    sendAtividade: async (req, res) => {    
        const { id } = req.params;
        const { textField } = req.body;
        const atividade = await AlunoAtividadeService.sendAtividade(id, textField);
        return res.json(atividade);
    },
    create: async (req, res) => {
        const { titulo, descricao, pontuacao, dataInicio, dataTermino } = req.body;
        
        const newAtividade = await AlunoAtividadeService.createAtividade(
          titulo,
          descricao,
          pontuacao,
          dataInicio,
          dataTermino
        );
        return res.json(newAtividade);
    },
    createAssociation: async (req, res) => {
        const { idUser, idAtividade } = req.params;
        const atividade = await AlunoAtividadeService.createAssociation(idUser, idAtividade);
        return res.json(atividade);
    }
};

module.exports = AlunoAtividadeController;
