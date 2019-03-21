module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
      name: DataTypes.STRING,
      price: DataTypes.NUMBER,
      category: DataTypes.STRING,
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    });
    return Order;
  };
