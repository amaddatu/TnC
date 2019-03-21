// Order controller

var express = require("express");

var router = express.Router();
// edit Order model to match sequelize
var db = require("../models/index");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/orders");
});

// get route, edited to match sequelize
router.get("/order", function(req, res) {
  // replace old function with sequelize function
  db.Order.findAll()
    // use promise method to pass the Orders...
    .then(function(dbOrder) {
      console.log(dbOrder);
      // into the main index, updating the page
      var hbsObject = { Order: dbOrder };
      return res.render("index", hbsObject);
    });
});

// post route to create Orders
router.post("/orders/create", function(req, res) {
  // edited Order create to add in a Order_name
  db.Order.create({
    Order_name: req.body.Order_name
  })
    // pass the result of our call
    .then(function(dbOrder) {
      // log the result to our terminal/bash window
      console.log(dbOrder);
      // redirect
      res.redirect("/");
    });
});

// put route to change item availability
router.put("/orders/update/:id", function(req, res) {
  // update one of the Orders
  db.Order.update({
    avilible: false
  },
  {
    where: {
      id: req.params.id
    }
  }
  ).then(function(dbOrder) {
    res.json("/");
  });
});

module.exports = router;
