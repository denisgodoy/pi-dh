const yup = require('yup');

function userValidator(req, res, next) {
  const schema = yup.object().shape({
    nome: yup.string().required('O campo NOME é obrigatório'),
    sobrenome: yup.string().required('O campo SOBRENOME é obrigatório'),
    email: yup
      .string()
      .email('Insira um endereço de e-mail válido')
      .required('O campo E-MAIL é obrigatório'),
    senha: yup.string().required('O campo SENHA é obrigatório'),
    confirmacaoSenha: yup
      .string()
      .oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais'),
    tipoUser: yup.string().required('O campo TIPOUSER é obrigatório'),
    termos: yup
      .boolean()
      .oneOf([true])
      .required('O campo TERMOS é obrigatório'),
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
