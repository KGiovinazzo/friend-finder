var friends = require("./app/data/friends");

// console.log(friends);

module.exports = function(app) {
    //GET requests
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    //POST request
    //Compatability logic
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        //Loop through score to make array

        for (var i = 0; i < newFriend.scores.length; i++){
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        };

        var newBestie = 0;

        var scoreDifference = 40;

        for (var j = 0; j <friends.length; j++) {
            var friendScore = 0;

            for (var k = 0; k < friends[j].scores.length; k++) {
                var comparedScore = Math.abs(newFriend.scores[k] - friends[j].scores[k]);
                friendScore += comparedScore;
            };
        }
    })





}

app.get("./api/:friends", function(req, res) {

    res.json(friends);

});

//GET route

//POST route

//Double for loop