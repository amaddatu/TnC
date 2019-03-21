var db = require("../models");

/*module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
}; */

// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
var path = require("path");
// ROUTING
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  app.get("/about", function(req, res) {
    res.render("about", {
      layout: "main"
    });
  });
  app.get("/order", function(req, res) {
    res.render("order", {
      layout: "main"
    });
  });
  app.get("/news", function(req, res) {
    res.render("news", {
      layout: "main"
    });
  });
  app.get("/checkout", function(req, res) {
    res.render("checkout", {
      layout: "main"
    });
  });
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    // res.sendFile(path.join(__dirname, "public/order.html"));
    res.render("index", {
      layout: "empty"
    });
  });
/*   app.get('/add-to-cart/id:', function(req, res) {
    var productId = req.params.id;
  }) */
};