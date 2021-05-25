const yup = require('yup');

function validator(req, res, next) {
    const schema = yup.object().shape({
        nome: yup.string().required(),
        email: yup.string().required(),
        mensagem: yup.string().required().min(10)
    });

    if (!schema.isValidSync(req.body)) {
        return res.status(400).json({error: 'Por favor, verifique os campos de preenchimento e tente novamente.'});
    }
    
    next(); 
}

module.exports = validator;