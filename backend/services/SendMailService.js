const nodemailer = require('nodemailer');

const SendMailService = {
    sendMail: (assunto, para, corpo) => {
        
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        });
    
        let mailOptions = {
            from: 'Elevel' + ' <' + process.env.EMAIL + '>', 
            to: para,
            subject: assunto,
            text: corpo
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    }
}

module.exports = SendMailService;