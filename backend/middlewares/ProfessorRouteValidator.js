function professorValidator(req, res, next) {
    if (req.user.tipoUser == 'professor') {
      next();
    } else {
      res.redirect('/dashboard/aluno');
    }
  }
  
module.exports = professorValidator;
