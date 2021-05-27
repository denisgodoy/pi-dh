const SendMailService = require('../services/SendMailService');

const HomeController = {
    index: (req, res) => {
        return res.render('landing-page');
    },
    sendMail: (req, res) => {
        const { nome, email, mensagem } = req.body;

        let assunto = 'Nova mensagem recebida do site';
        let para = process.env.EMAIL;
        let corpo = 'Nova mensagem recebida de: ' + nome + ' <' + email + '>' + '\n' + mensagem;

        SendMailService.sendMail(assunto, para, corpo);
        return res.render('success');
    }
}

module.exports = HomeController;