import * as Sequelize from "sequelize";


const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      hashedPassword: {
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i
      },
      firstname: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
      },
      lastname: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          lowercase: true,
          validate: {
            isEmail: true,
            notEmpty: true
          }
      },
      fcm_token: {
        type: DataTypes.STRING,
      },
      api_key: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
      },
      sex: {
          type: DataTypes.STRING
      },
      date_of_birth: {
          type: DataTypes.DATEONLY
      },
      create_date: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.NOW
      }
    });

    User.associate = models => {
        User.hasMany(models.Maison, {as: "houses"});
        User.hasMany(models.Vehicule, {as: "vehicules"});
        //User.belongsToMany(models.Maison, {through: "maison_user", as: "housesLocations", foreignKey: "user_id"});
        //User.belongsToMany(models.Vehicule, {through: "vehicule_user", as: "carsLocations", foreignKey: "user_id"});
    }

    return User;
  };
   
  export default user;