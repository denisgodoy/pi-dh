function professorValidator(req, res, next) {
    if (req.user.tipoUser == 'professor') {
      next();
    } else {
      res.redirect('/aluno');
    }
  }
  
  module.exports = professorValidator;