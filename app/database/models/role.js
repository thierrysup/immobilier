import * as Sequelize from "sequelize";

const role = (sequelize, DataTypes) => {
    const Role = sequelize.define("role", {
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
    return Role;
};

export default role;