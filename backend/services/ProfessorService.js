const database = require("../database/models");

const ProfessorService = {
  getProfessorLista: async()=>{
    const resultados = await database.User.findAll({
      where: {
        tipoUser: "professor"
      }
    }); 
    return resultados;
  },
  getProfessorById: async (id) => {
    return await database.User.findByPk(id, {where: {
      tipoUser: "professor"
    }});
  },
};

module.exports = ProfessorService;
