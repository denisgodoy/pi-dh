const AlunoAtividadeService = require('../services/AlunoAtividadeService');

const AlunoAtividadeController = {
    index: (req, res) => {
        return res.render('atividades');
    },
    getAllAtividades: async (req, res) => {
        const { idUser } = req.params;
        const atividades = await AlunoAtividadeService.getAtividades(idUser);
        return res.send(atividades);
    },
    getAtividadeById: async (req, res) => {
        const { idAtividade } = req.body;
        const atividadeById = await AlunoAtividadeService.getAtividadeById(idAtividade);
        return res.send(atividadeById);
    },
    sendAtividade: async (req, res) => {    
        const { idAtividade } = req.params;
        const { textArea } = req.body;
        await AlunoAtividadeService.sendAtividade(idAtividade, textArea);
        return res.send('Atividade enviada com sucesso.');
    }
};

module.exports = AlunoAtividadeController;
