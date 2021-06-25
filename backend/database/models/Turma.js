module.exports = (sequelize, DataTypes) => sequelize.define("Turma", 
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