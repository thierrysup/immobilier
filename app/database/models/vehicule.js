import * as Sequelize from "sequelize";


const car = (sequelize, DataTypes) => {
    const Car = sequelize.define('car', {
        brand: {
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
        model: {
            type: DataTypes.STRING,
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
        mileage: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        fuel: {
            type: DataTypes.STRING(16),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        transmission: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        year: {
            type: DataTypes.INTEGER,
            defaultValue: 1990,
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
        isDriver: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        isOccupied: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        enable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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

    Car.associate = models => {
        Car.belongsTo(models.User, { as: 'owner', constraints: true });
    };

    return Car;
};

export default car;