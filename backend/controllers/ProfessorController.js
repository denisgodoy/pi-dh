const ProfessorController = {
    index: (req, res) => {
        return res.render('dashboard-professor/dashboard-avaliacoes');
    },
    aluno: (req, res)=>{
        return res.render('dashboard-professor/dashboard-alunos');
    },
    atividade: (req, res)=>{
        return res.render('dashboard-professor/dashboard-atividades');
    },
    criarAtividade: (req, res)=>{
        return res.render('dashboard-professor/dashboard-atividades-criar');
    },
    turma: (req, res)=>{
        return res.render('dashboard-professor/dashboard-turmas');
    },
    ranking: (req, res)=>{
        return res.render('dashboard-professor/dashboard-turmas');
    }
}

module.exports = ProfessorController;