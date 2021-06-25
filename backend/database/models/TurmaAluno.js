module.exports = (sequelize, DataTypes) => {
    const TurmaAluno = sequelize.define("TurmaAluno", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
        // CRIAR COLUNA QUE VAI RECEBER OS PONTOS DO ALUNO DA TURMA??
    },
    {
        tableName: 'TURMA_ALUNO',
        timestamps: false,
    }
    );
    
    TurmaAluno.associate = function(models) {
        TurmaAluno.belongsTo(models.User, {
            as: 'aluno',
            foreignKey: 'idUser'
        });
        TurmaAluno.belongsTo(models.Turma, {
            as: 'turma',
            foreignKey: 'idTurma'
        });
    }
    return TurmaAluno;
};