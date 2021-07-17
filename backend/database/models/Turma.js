module.exports = (sequelize, DataTypes) => { 
    const Turma = sequelize.define("Turma", 
        {
            idTurma: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            codigo: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            }
        },
        {
            tableName: 'TURMA',
            timestamps: false,
        }
    );

    Turma.associate = function(models) {
        Turma.belongsToMany(models.User, {
            through: models.TurmaAluno,
            foreignKey: 'idTurma',
            otherKey: 'idUser'
        });
        Turma.belongsTo(models.AtividadeTurma, {
            foreignKey: 'idTurma'
        });
    }
    return Turma;
};
