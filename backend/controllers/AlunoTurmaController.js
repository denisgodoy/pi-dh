const AlunoTurmaService = require("../services/AlunoTurmaService");
const RankingService = require("../services/RankingService");

const AlunoTurmaController = {
    getAllClasses: async (req, res) => {
        const { idUser, nome } = req.user;
        const data = await AlunoTurmaService.getClasses(idUser);
        const sum = await RankingService.getRanking(idUser);

        return res.render('dashboard-student/classes', 
        { 
            nome,
            data,
            sum
        });
    },
    getClassById: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser, nome } = req.user;
        const data = await AlunoTurmaService.getClassById(idTurma);
        const sum = await RankingService.getTotalPoints(idUser, idTurma);
        const classmates = await AlunoTurmaService.getTotalClassmates(idTurma);
      
        return res.render('dashboard-student/class-dash', 
        { 
            nome,
            data,
            sum,
            classmates
        });
    },
    createAssociation: async (req, res) => {
        const { idUser, nome } = req.user;
        const { idTurma } = req.body;
		const data = await AlunoTurmaService.getClasses(idUser);

        try {
			await AlunoTurmaService.createAssociation(idUser, idTurma);
			if (err)
				console.log(err);
		} catch (e) {
			console.log(e);
		}
		
        return res.render('dashboard-student/classes', 
        {
            nome,
            data
        });
    },
    destroyAssociation: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser } = req.user;
        await AlunoTurmaService.destroyAssociation(idTurma, idUser);
        return res.redirect('/dashboard/aluno/turmas');
    }
};

module.exports = AlunoTurmaController;
