const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function alunoValidator(req, res, next) {
  const decoded = jwt.verify(req.session.userToken, jwtSecret);

  if (decoded.tipoUser == 'professor') {
    next();
  } else {
    res.redirect('/aluno');
  }
}

module.exports = alunoValidator;
