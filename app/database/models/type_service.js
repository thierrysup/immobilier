import * as Sequelize from "sequelize";

const type_service = (sequelize, DataTypes) => {
    const TypeService = sequelize.define("type_service", {
        name: {
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
    return TypeService;
};

export default type_service;