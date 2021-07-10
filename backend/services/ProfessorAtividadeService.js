const database = require('../database/models/index');


const ProfessorAtividadeService = {
  getAtividades: async () => {
    const atividades = await database.Atividade.findAll();
    return atividades; 
  },
  createAtividade: async (titulo, descricao, pontuacao, dataInicio, dataTermino) =>{
    const newAtividade = await database.Atividade.create({titulo, descricao, pontuacao, dataInicio, dataTermino});
    return newAtividade;
  },
  destroyAtividade: async(idAtividade)=>{
    const destroyedAtividade = await database.Atividade.destroy({where:{ idAtividade }});
    return destroyedAtividade;
  }
};

module.exports = ProfessorAtividadeService;