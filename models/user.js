module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
     name: DataTypes.STRING,
     email: DataTypes.STRING,
     password: DataTypes.STRING,
     phone: DataTypes.STRING,
     address: DataTypes.STRING,
     city: DataTypes.STRING,
     state: DataTypes.STRING,
     zip: DataTypes.STRING,
       google_id: DataTypes.STRING // will highly recommend adding this for later
    });
    return User;
   };