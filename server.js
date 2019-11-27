//Dependencies
var express = require("express");
var path = require("path");

//Setting up express 
var app = express();
var PORT = process.env.PORT || 8080;

//Router
require('.app/routing/apiRoutes')(app);
require('.app/routing/htmlRoutes')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});