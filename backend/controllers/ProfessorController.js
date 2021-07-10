const ProfessorService = require('../services/ProfessorService');
const userService = require('../services/userService');


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
        let { nome, sobrenome, email, senha, tipoUser = "professor" } = req.body;
    
        senha = await UserService.hashPassword(senha);
    
        const professor = await ProfessorService.createProfessor(
          nome,
          sobrenome,
          email,
          senha,
          tipoUser
        );
      
        return res.json(professor);

    },
    updateProfessor: (req, res)=>{
        return res.send('Ainda não implementado');
    },
    destroyProfessor: (req, res)=>{
        return res.send('Ainda não implementado');
    }

}

module.exports = ProfessorController;