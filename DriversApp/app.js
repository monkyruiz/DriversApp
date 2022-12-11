
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//create variable to handle express function
const app = express();

//i will explain to you why do we need this function
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

//get function to home route
app.get("/", function(req, res) {
  res.render("home");
});

//set servere listner on local host
app.listen(3000, function() {
  console.log("Server strted on port 3000");
});
