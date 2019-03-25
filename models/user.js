  module.exports = function(sequelize, DataTypes) {
      var User = sequelize.define("User", {
          name: DataTypes.STRING,
          total: DataTypes.DECIMAL(10,2),
          category: DataTypes.STRING,
          status: {
              type: DataTypes.STRING,
              defaultValue: 1
          }
      })
      return User;
  };