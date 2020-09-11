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

    ServiceSocial.associate = models => {
        ServiceSocial.belongsTo(models.TypeService, { as: 'typeService', constraints: true });
        ServiceSocial.belongsToMany(models.Maison, {through: "house_social_service", as: "socialServices", foreignKey: "service_id"})
    }

    return ServiceSocial;
};

export default service_social