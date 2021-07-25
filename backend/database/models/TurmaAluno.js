module.exports = (sequelize, DataTypes) => {
    const TurmaAluno = sequelize.define("TurmaAluno", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    },
	{
		indexes: 
		[{
			name: 'index_turma_aluno',
			fields: ['idUser', 'idTurma']
		}],
		tableName: 'TURMA_ALUNO',
        timestamps: false,
    }
    );
    
    TurmaAluno.associate = function(models) {
        TurmaAluno.belongsTo(models.User, {
            foreignKey: 'idUser'
        });
        TurmaAluno.belongsTo(models.Turma, {
            foreignKey: 'idTurma'
        });
    }
    return TurmaAluno;
};
