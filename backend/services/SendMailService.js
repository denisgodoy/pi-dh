const nodemailer = require('nodemailer');

const SendMailService = {
    sendMail: async (mailData) => {
        
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
            to: mailData.recipient,
            subject: mailData.topic,
            text: mailData.body
        };

        await new Promise( (resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject();
                    return console.log(error);
                } 
                console.log('Message sent: %s', info.messageId);
                resolve();
            });
        })
    }
}

module.exports = SendMailService;