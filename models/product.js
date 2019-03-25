module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
      name: DataTypes.STRING,
      total: DataTypes.DECIMAL(10,2),
      category: DataTypes.STRING,
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }
    });
    return Product;
  };
  