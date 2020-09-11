import * as Sequelize from "sequelize";


const maison = (sequelize, DataTypes) => {
    const Maison = sequelize.define('maison', {
        label: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        latitude: {
            type: DataTypes.DOUBLE
        },
        longitude: {
            type: DataTypes.DOUBLE
        },
        piece: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        price: {
            type: DataTypes.DOUBLE,
            defaultValue: 0.0,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            lowercase: true,
            validate: {
                notEmpty: true
            }
        },
        profileImage: {
            type: DataTypes.STRING,
        },
        allHouseImage: {
            type: DataTypes.STRING,
        },
        period: {
            type: DataTypes.STRING(16),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        create_date: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    Maison.associate = models => {
        Maison.belongsTo(models.User, { as: 'owner', constraints: true });
        Maison.belongsToMany(models.ServiceSocial, {through: "house_social_service", as: "houses", foreignKey: "house_id"})
    };


    return Maison;
};

export default maison;