const yup = require('yup');

function contactFormValidator(req, res, next) {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        message: yup.string().required(),
        terms: yup.boolean().oneOf([true]).required()
    });

    if (!schema.isValidSync(req.body)) {
        return res.status(400).json({error: 'Por favor, verifique os campos de preenchimento e tente novamente.'});
    };

    next(); 
}

module.exports = contactFormValidator;