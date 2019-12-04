var path = require("path");

module.export = function(app) {
//Survey route

app.get("/survey", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/survey.html"));
});

//if no matching route, default to home

app.get("*", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/home.html"));
});

};