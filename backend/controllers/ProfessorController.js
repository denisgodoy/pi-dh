const ProfessorService = require('../services/ProfessorService');
const database = require('../database/models');

const ProfessorController = {
    
    // index: (req, res) => {
    //     return res.render('dashboard-professor/dashboard-avaliacoes');
    // },
 
    indexAllTurmas: (req, res)=>{
        return res.render('dashboard-professor/dashboard-turmas');
    },
    createTurma: async (req, res) => {
        const { 
            codigo, 
            titulo, 
        } = req.body;

        const turma = await ProfessorService.createTurma(
            codigo, 
            titulo, 
        );
        
        return res.json(turma);
    },
    updateTurma: (req, res)=>{
        return res.send('Ainda não implementado');
    },
    destroy: (req, res)=>{
        return res.send('Ainda não implementado');
    }

}

module.exports = ProfessorController;