import * as Sequelize from "sequelize";

const service_social = (sequelize, DataTypes) => {
    const ServiceSocial = sequelize.define("service_social", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        distance: {
            type: DataTypes.DOUBLE,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        labelName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING,
            unique: true,
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
    return ServiceSocial;
};

export default service_social