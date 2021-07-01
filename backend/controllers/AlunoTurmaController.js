const AlunoTurmaService = require("../services/AlunoTurmaService");
const QrCodeService = require('../services/QrCodeService');

const AlunoTurmaController = {
    index: (req, res) => {
        return res.render('turmas');
    },
    getAllTurmas: async (req, res) => {
        const { idUser } = req.params;
        const turmas = await AlunoTurmaService.getTurmas(idUser);
        return res.send(turmas);
    },
    getTurmaById: async (req, res) => {
        const { idTurma } = req.params;
        const turmaById = await AlunoTurmaService.getTurmaById(idTurma);
        return res.send(turmaById);
    },
    create: async (req, res) => {
        const { titulo } = req.body;
        const turma = await AlunoTurmaService.createTurma(titulo);
        return res.json(turma);
    },
    createQrCode: (req, res) => {
        const { codigo } = req.params;
        const data = `www.elevel.com.br/participar/${ codigo }`;
        const qrcode = QrCodeService.qrCode(data);
        res.type('svg');
        return qrcode.pipe(res);
    },
    createAssociation: async (req, res) => {
        const { idUser, idTurma } = req.params;
        const association = await AlunoTurmaService.createAssociation(idUser, idTurma);
        return res.json(association)
    },
    destroyAssociation: (req, res) => {
        const { id } = req.params;
        const destroyed = await AlunoTurmaService.destroy(id);
        return res.json(destroyed);
    }
};

module.exports = AlunoTurmaController;
