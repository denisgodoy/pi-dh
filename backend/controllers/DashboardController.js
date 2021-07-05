const DashboardController = {
    indexAluno: (req, res) => {
        return res.render('aluno-dashboard');
    },
    indexProfessor: (req, res) => {
        return res.render('professor-dashboard');
    }
};

module.exports = DashboardController;