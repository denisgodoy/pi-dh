const express = require('express');
const router = express.Router();

const controller = require('../controllers/ProfessorController');

router.get('/', controller.index);
router.get('/alunos', controller.aluno);
router.get('/atividades', controller.atividade);
router.get('/atividades/criar', controller.criarAtividade);
router.get('/turmas', controller.turma);
router.get('/ranking', controller.ranking);


module.exports = router;