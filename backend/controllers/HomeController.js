const HomeService = require('../services/HomeService');

const HomeController = {
    index: (req, res) => {
        return res.send('homepage');
    },
    form: async (req, res) => {
        const { nome, email, mensagem } = req.body;
        await HomeService.form(nome, email, mensagem);
        return res.redirect('/sucesso');
    },
    redirect: (req, res) => {
        return res.send('contato recebido')
    }
}

module.exports = HomeController;