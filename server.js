var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 8080;
// var basicAuth = require('express-basic-auth')

// app.use(basicAuth({
//     users: { 'admin': 'supersecret' }
// }))
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
require("./routes/routes.js")(app);
// require("./routes/html-routes.js")(app);
// require("./routes/customer-api-routes.js")(app);
// require("./routes/institution-api-routes.js")(app);
// require("./routes/vendors-api-routes.js")(app);


db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
  });
});