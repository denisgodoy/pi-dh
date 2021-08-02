const EvaluationService = require('../services/EvaluationService');
const AlunoAtividadeService = require('../services/AlunoAtividadeService');

const EvaluationController = {
    getActivities: async (req, res) => {
        const { idUser, nome } = req.user;
        const data = await EvaluationService.getActivities(idUser);

        return res.render('dashboard-professor/dashboard-avaliacoes', 
        { 
            nome,
			data
        });
    },
	evaluate: async (req, res) => {
		const { idAtividade, idUser } = req.params;
        const activity = await EvaluationService.studentActivity(idUser, idAtividade);
		const data = await AlunoAtividadeService.getActivity(idAtividade);

		return res.render('dashboard-professor/dashboard-evaluation', { data, activity });
	},
	sendEvaluation: async (req, res) => {
		const { idAtividade, idUser } = req.params;
		const { evaluation } = req.body;
		await EvaluationService.sendEvaluation(idAtividade, idUser, evaluation);

		res.redirect("/dashboard/professor");
	}
}

module.exports = EvaluationController;