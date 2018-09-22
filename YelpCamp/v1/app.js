var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("landing");
});

app. get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f7c778a5ebbcb0_340.jpg"},
        {name: "Granite Hill", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f7c778a5ebbcb0_340.jpg"},
        {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f7c778a5ebbcb0_340.jpg"}
    ]
    
    res.render("campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});