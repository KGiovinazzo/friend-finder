var friends = require("./app/data/friends");

console.log(friends);

app.get("./api/:friends", function(req, res) {

    res.json(friends);

});

//GET route

//POST route

//Double for loop