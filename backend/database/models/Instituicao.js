module.exports = (sequelize, DataTypes) => sequelize.define("Instituicao", 
    {
        idInstituicao: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        razaoSocial: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        nomeFantasia: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        cnpj: {
            type: DataTypes.INTEGER(18),
            allowNull: false
        },
        dominio: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        tableName: 'INSTITUICAO',
        timestamps: false,
    }
);