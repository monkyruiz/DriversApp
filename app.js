
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//create variable to handle express function
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/login", function(req, res) {
  res.render("login");
});
app.get("/register", function(req, res) {
  res.render("register");
});
app.get("/signUp", function(req, res) {
  res.render("signUp");
});



//set servere listner on local host
app.listen(3000, function() {
  console.log("Server strted on port 3000");
});
