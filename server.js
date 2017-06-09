// Node/Express server

// dependencies
var express = require("express");
var bodyParser = require("body-parser");

var db = require("./models");
var exphbs = require('express-handlebars');
// Express

var app = express();
var PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// static directory
app.use(express.static("./public"));

//this is a mock up of the token
// assumes userId 2 is logged in
app.use(function(req,res,next){
	req.token = {userId: 3};
	next();
});

// routes
require("./routes/routes.js")(app);

// db.sequelize.sync({force: true}).then(function(){

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + "/public"));

// app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// require("./routes/html-routes.js")(app);
// require("./routes/customer-api-routes.js")(app);
// require("./routes/institution-api-routes.js")(app);
// require("./routes/vendors-api-routes.js")(app);


db.sequelize.sync().then(function() {

	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});