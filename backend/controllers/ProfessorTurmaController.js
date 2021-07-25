const ProfessorTurmaService = require("../services/ProfessorTurmaService");

const ProfessorTurmaController = {
    getClasses: async (req, res) => {
        const { idUser, nome } = req.user;
        const data = await ProfessorTurmaService.getClasses(idUser);
        return res.render('dashboard-professor/dashboard-turmas', 
        { 
            nome,
            data
        });
    },
    getClassById: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser, nome } = req.user;
        const data = await ProfessorTurmaService.getClassById(idTurma);
        const numberOfStudents = await ProfessorTurmaService.numberOfStudents(idTurma);
      
        return res.render('dashboard-professor/dashboard-turmas', 
        { 
            nome,
            data,
            numberOfStudents
        });
    },
    createAssociation: async (req, res) => {
        const { idUser, nome } = req.user;
        const { idTurma } = req.body;
        await ProfessorTurmaService.createAssociation(idUser, idTurma);
        const data = await ProfessorTurmaService.getClasses(idUser);

        return res.render('dashboard-professor/dashboard-turmas', 
        {
            nome,
            data
        });
    },
    destroyAssociation: async (req, res) => {
        const { idTurma } = req.params;
        const { idUser } = req.user;
        await ProfessorTurmaService.destroyAssociation(idTurma, idUser);
        return res.redirect('/dashboard/professor/turmas');
    }
};

module.exports = ProfessorTurmaController;
