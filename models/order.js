// module.exports = function(sequelize, DataTypes) {
//     var Order = sequelize.define("Order", {
//       name: DataTypes.STRING,
//       price: DataTypes.NUMBER,
//       category: DataTypes.STRING,
//       available: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true
//       }
//     });
//     return Order;
//   };

// ANTHONY'S Revision (small mistakes
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    name: DataTypes.STRING,
    total: DataTypes.DECIMAL(10,2),
    category: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  });
  return Order;
};
