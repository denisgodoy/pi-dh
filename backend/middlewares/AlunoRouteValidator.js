function alunoValidator(req, res, next) {
  if (req.user.tipoUser == 'aluno') {
    next();
  } else {
    res.redirect('/dashboard/professor');
  }
}

module.exports = alunoValidator;
