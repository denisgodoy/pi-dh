const AlunoController = {
  showDashboardAluno: (req, res) => {
    return res.send(req.session.user);
  },
};

module.exports = AlunoController;
