import * as Car from "./vehicule"
import * as User from "./user"
import * as Sequelize from "sequelize";


const car_location = (sequelize, DataTypes) => {
    const CarLocation = sequelize.define('car_location', {
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

    return CarLocation;
};

Car.belongsToMany(models.User, {through: car_location, as: "carLocators", foreignKey: "car_id"});
User.belongsToMany(models.Car, {through: car_location, as: "carLocations", foreignKey: "user_id"});

export default car_location;
