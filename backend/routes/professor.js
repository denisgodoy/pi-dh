const express = require('express');
const router = express.Router();

const controller = require('../controllers/ProfessorController');

// CRUD Turmas
router.get('/turmas', controller.indexAllTurmas);
router.post('/turmas', controller.createTurma);
router.put('/turmas/:id', controller.updateTurma);
router.delete('turmas/:id', controller.destroy);

// Get Detalhado (fazer mais tarde)
// router.get('/turmas/:id', controller.indexTurmaById);
// router.get('/turmas/:id/:attribute', controller.indexByIdAndAttribute);

module.exports = router;