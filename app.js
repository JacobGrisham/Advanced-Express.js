const express = require("express"); // Use this to require the express package
var app = express(); //Use this to be able to call functions within the epxress package

app.use(express.static("public"));
app.set("view engine", "ejs"); // use this to avoid having to type "home.ejs", "love.ejs", etc. Just type "home" and "love"

app.get("/", function(req, res){
	res.render("home"); //Use this to render a page
});

app.get("/fellinlovewith/:thing", function (req, res){
	var thing = req.params.thing
	res.render("love", {thingVariable: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "me"},
		{title: "Post 2", author: "myself"},
		{title: "Post 3", author: "I"}
	]; //Use this object to render mulitple classes
	
	res.render("posts", {posts: posts});
});

app.listen(3000, function() {
	console.log("Server is on!");
	});
