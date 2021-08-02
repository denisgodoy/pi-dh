const database = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const EvaluationService = {
	getActivities: async (idUser) => {
		const pending = await database.sequelize.query(
		`SELECT tbl3.* FROM (
		SELECT turma.titulo AS turmaTitulo, tbl2.* 
		FROM (
		SELECT atividade_turma.idTurma, tbl.* 
		FROM atividade_turma 
		JOIN (
			SELECT *
			FROM atividade_aluno
			WHERE textField IS NOT NULL
			AND evaluation IS NULL
		) AS tbl
		ON atividade_turma.idAtividade = tbl.idAtividade
		) AS tbl2
		JOIN turma
		ON tbl2.idTurma = turma.idTurma) AS tbl3
		JOIN turma_professor
		ON turma_professor.idTurma = tbl3.idTurma
		WHERE turma_professor.idUser = ${idUser}`,
		{ type: QueryTypes.SELECT }
		);
		return pending;
	},
	studentActivity: async (idUser, idAtividade) => {
		const activity = await database.sequelize.query(
		`	SELECT *
			FROM atividade_aluno
			WHERE idUser = ${idUser}
			AND idAtividade = ${idAtividade}
			AND evaluation IS NULL
		`,
		{ type: QueryTypes.SELECT }
		);
		return activity;
	},
	sendEvaluation: async (idAtividade, idUser, evaluation) => {
		const evaluate = await database.AtividadeAluno.update({
			evaluation
		  },
		  {
			where: { idAtividade, idUser }
		  });
		  return evaluate;
	}
}

module.exports = EvaluationService;