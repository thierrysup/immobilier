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
            type: DataTypes.ENUM({
                values: ['DAILY', 'WEEKLY', 'MONTHLY']
            }),
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

    return User;
};

export default user;