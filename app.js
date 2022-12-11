const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//create variable to handle express function
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect("mongodb://127.0.0.1/DriverApp", {useNewUrlParser: true});
mongoose.connect('mongodb+srv://beniaridani:Daniel112.@cluster0.qj2ixge.mongodb.net/?retryWrites=true&w=majority');


const clientScehma = new mongoose.Schema({
  fname:String,
  lname:String,
  userName:String,
  email:String,
  password:String
});
const Client = mongoose.model("Client",clientScehma);

app.post("/cregister", function(req, res) {

const Newclient = new Client({
  fname: req.body.firstName,
  lname:req.body.lastName,
  userName:req.body.userName,
  email:req.body.email,
  password:req.body.password
});
  Newclient.save();

// function(res,err){
//   if(err){
//     res.redirect("/cregister")
//   }else{
//     res.render("/successPage")
//   }
// })
  });

app.get("/", function(req, res) {
  res.render("home");
});


app.get("/login", function(req, res) {
  res.render("login");
});
app.get("/cregister", function(req, res) {
  res.render("cregister");
});
app.get("/dregister", function(req, res) {
  res.render("dregister");
});
app.get("/signUp", function(req, res) {
  res.render("signUp");
});



//set servere listner on local host
app.listen(3000, function() {
  console.log("Server strted on port 3000");
});
