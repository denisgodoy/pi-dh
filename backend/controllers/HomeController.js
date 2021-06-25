const SendMailService = require('../services/SendMailService');

const HomeController = {
    index: (req, res) => {
        return res.render('landing-page');
    },
    contactUs: (req, res) => {
        return res.render('contact-us');
    },
    sendMail: async (req, res) => {
        const { name, email, message } = req.body;

        let mailData = {
            topic: 'Nova mensagem recebida do site',
            recipient: process.env.EMAIL,
            body: 'Nova mensagem recebida de: ' + name + ' <' + email + '>' + '\n' + message
        }

        await SendMailService.sendMail(mailData);
        return res.render('success');
    }
}

module.exports = HomeController;