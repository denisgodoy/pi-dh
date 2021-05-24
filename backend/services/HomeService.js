const database = require('../database/models/index');

const HomeService = {
    form: async (
        nome,
        email,
        mensagem
        ) => {
        const novoContato =  await database.Contato.create({
            nome, 
            email, 
            mensagem
        });
        return novoContato;
    }
}

module.exports = HomeService;