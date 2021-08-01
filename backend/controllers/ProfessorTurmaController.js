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
    createClass: async (req, res) => {
        return res.render('dashboard-professor/dashboard-turmas-criar');
    
    },
    sendClass: async (req, res)=>{

        if(!req.body){
            res.status(400).send({message: "Teste: dados não estão vindo do formulário!"})
        }
        const { idUser, nome } = req.user;
        const { codigo, titulo } = req.body;
        const data = await ProfessorTurmaService.getClasses(idUser);
        const idTurma = await ProfessorTurmaService.createClass(codigo, titulo);

        await ProfessorTurmaService.createAssociationClassProfessor(idUser, idTurma);

        res.redirect("/dashboard/professor/turmas");
    },
    updateFormClass: async (req, res) => {
        const { idTurma } = req.params;
        const { nome } = req.user;

        const data = await ProfessorTurmaService.getById(idTurma);
        console.log(idTurma);
        return res.render('dashboard-professor/dashboard-turmas-editar', 
        { 
            nome,
            data,
            idTurma
        });
    },
    updateClass: async (req,res) =>{
        if(!req.body){
            res.status(400).send({message: "Teste: dados não estão vindo do formulário!"})
        }
        const { nome } = req.user;
        const { idTurma } = req.params;
        const {codigo, titulo } = req.body;

        let updatedClass = await ProfessorTurmaService.updateClass(idTurma, codigo, titulo); 

        res.redirect("/dashboard/professor/turmas");
    },
    getClassById: async (req, res) => {
        const { idUser, nome } = req.user;
        const { idTurma } = req.params;
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
    destroyClass: async (req, res) => {
        const { idUser, nome } = req.user;
        const { idTurma } = req.params;
        const data = await ProfessorTurmaService.getClasses(idUser);
        await ProfessorTurmaService.destroyAssociationProfessorClass(idTurma);
        await ProfessorTurmaService.destroyClass(idTurma);
        res.redirect("/dashboard/professor/turmas");
    }
};

module.exports = ProfessorTurmaController;
