const yup = require('yup');

function userValidator(req, res, next) {
	const schema = yup.object().shape({
		name: yup.string().required('Este campo é obrigatório'),
		lastName: yup.string().required('Este campo é obrigatório'),
		email: yup.string().email('Insira um endereço de e-mail válido').required('Este campo é obrigatório'),
		password: yup.string().required('Este campo é obrigatório'),
		passwordConfirmation: Yup.string().oneOf([Yup.ref('senha'), null], 'As senhas devem ser iguais'),
		userType: yup.string().required('Este campo é obrigatório'),
		agree: yup.boolean().oneOf([true]).required('Este campo é obrigatório'),
	});

	if (!schema.isValidSync(req.body)) {
		schema
			.strict()
			.validate(req.body, { abortEarly: false })
			.catch((errors) => {
				return res.status(400).json({ errors: errors.errors });
			});
	} else {
		next();
	}
}

module.exports = userValidator;
