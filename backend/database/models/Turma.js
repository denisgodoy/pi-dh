module.exports = (sequelize, DataTypes) => sequelize.define("Turma", 
    {
        idTurma: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codigo: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        tableName: 'TURMA',
        timestamps: false,
    }
);