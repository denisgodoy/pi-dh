const express = require('express');
const router = express.Router();

const controller = require('../controllers/ProfessorController');

// CRUD Turmas
router.get('/', controller.indexAllProfessores);
router.get('/:id', controller.indexProfessorById);

// Get Detalhado (fazer mais tarde)
// router.get('/turmas/:id', controller.indexTurmaById);
// router.get('/turmas/:id/:attribute', controller.indexByIdAndAttribute);

module.exports = router;