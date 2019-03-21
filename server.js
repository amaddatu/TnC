/* var express = require("express");

// bring in the models
var db = require("./models/index");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/order_controller");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
}); */


var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: "main", extname : '.hbs' }));
app.set("view engine", "hbs");

// var routes = require("./controllers/order_controller.js");

// app.use(routes);

require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
