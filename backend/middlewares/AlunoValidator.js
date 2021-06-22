const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function alunoValidator(req, res, next) {
  const decoded = jwt.verify(req.session.userToken, jwtSecret);

  if (decoded.tipoUser == 'aluno') {
    next();
  } else {
    res.redirect('/professor');
  }
}

module.exports = alunoValidator;
