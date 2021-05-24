const HomeService = require('../services/HomeService');

const HomeController = {
    index: (req, res) => {
        return res.send('homepage');
    },
    form: async (req, res) => {
        await HomeService.form();
        return res.send('sucesso')
    }
}

module.exports = HomeController;