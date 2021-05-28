const SendMailService = require('../services/SendMailService');

const HomeController = {
    index: (req, res) => {
        return res.render('landing-page');
    },
    sendMail: (req, res) => {
        const { nome, email, mensagem } = req.body;

        let mailData = {
            assunto: 'Nova mensagem recebida do site',
            para: process.env.EMAIL,
            corpo: 'Nova mensagem recebida de: ' + nome + ' <' + email + '>' + '\n' + mensagem
        }

        SendMailService.sendMail(mailData);
        return res.render('success');
    }
}

module.exports = HomeController;