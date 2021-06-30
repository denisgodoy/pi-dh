const ProfessorService = require('../services/ProfessorService');

const ProfessorController = {
    indexProfessorById: async (req, res) => {
        const { id } = req.params;
        const professor = await ProfessorService.getProfessorById(id);

        if (!professor) {
            return res.status(404).json({error: `Professor ${id} não encontrado`})
        }

        return res.json(professor);
    },
    indexAllProfessores: async (req, res)=>{
        const listaProfessores = await ProfessorService.getProfessorLista();
        return res.json(listaProfessores);
    },
    createProfessor: async (req, res) => {
        return res.json("Ainda não implementado");
    },
    updateProfessor: (req, res)=>{
        return res.send('Ainda não implementado');
    },
    destroyProfessor: (req, res)=>{
        return res.send('Ainda não implementado');
    }

}

module.exports = ProfessorController;