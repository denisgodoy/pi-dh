const DashboardController = {
    indexAluno: (req, res) => {
        return res.render('aluno-dasboard');
    },
    indexProfessor: (req, res) => {
        return res.render('professor-dashboard');
    }
};

module.exports = DashboardController;