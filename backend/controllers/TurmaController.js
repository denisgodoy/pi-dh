const TurmaService = require("../services/TurmaService");

const AlunoTurmaController = {
    index: (req, res) => {
        return res.render('turmas');
    },
    getAllTurmas: async (req, res) => {
        const { idUser } = req.params;
        const turmas = await TurmaService.getTurmas(idUser);
        return res.send(turmas);
    },
    getTurmaById: async (req, res) => {
        const { idTurma } = req.params;
        const turmaById = await TurmaService.getAtividadeById(idTurma);
        return res.send(turmaById);
    },
    create: async (req, res) => {
        const {codigo, titulo } = req.body;
        const turma = await TurmaService.createTurma(codigo, titulo);
        return res.json(turma);
    },
    createQrCode: (req, res) => {
        const { codigo } = req.params;
        const data = `www.elevel.com.br/participar/${ codigo }`;
        const qrcode = QrCodeService.qrCode(data);
        res.type('svg');
        return qrcode.pipe(res);
    }
};

module.exports = AlunoTurmaController;