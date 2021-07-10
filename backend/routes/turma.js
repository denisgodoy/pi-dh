const express = require('express');
const router = express.Router();

const controllerTurma = require('../controllers/TurmaController');

// CRUD Professor
router.get('/', controllerTurma.indexAllTurmas);
router.get('/:id', controllerTurma.indexTurmaById);
router.post('/turmas', controllerTurma.createTurma);
router.put('/turmas/:id', controllerTurma.updateTurma);
router.delete('/turmas/:id', controllerTurma.destroyTurma);

module.exports = router;