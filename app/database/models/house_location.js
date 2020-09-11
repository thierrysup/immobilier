import * as House from "./maison"
import * as User from "./user"
import * as Sequelize from "sequelize";


const house_location = (sequelize, DataTypes) => {
    const HouseLocation = sequelize.define('house_location', {
        periode: {
            type: DataTypes.STRING(16),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        workCompany: {
            type: DataTypes.STRING
        },
        caution: {
            type: DataTypes.DOUBLE,
            defaultValue: 0.0
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
        startDate: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        endDate: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
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

    return HouseLocation;
};

House.belongsToMany(models.User, {through: house_location, as: "houseLocators", foreignKey: "maison_id"});
User.belongsToMany(models.House, {through: house_location, as: "houseLocations", foreignKey: "user_id"});

export default house_location;
