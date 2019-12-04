var path = require("path");

module.exports = function(app) {
//Survey route

    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

//if no matching route, default to home

    app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};