const express = require('express');
const router = express.Router();

const controllerProfessor = require('../controllers/ProfessorController');

// CRUD Professor
router.get('/', controllerProfessor.indexAllProfessores);
router.get('/:id', controllerProfessor.indexProfessorById);
router.post('/professores', controllerProfessor.createProfessor);
router.put('/professores/:id', controllerProfessor.updateProfessor);
router.delete('/professores/:id', controllerProfessor.destroyProfessor);


module.exports = router;