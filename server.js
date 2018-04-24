var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var tables = [
{
    name: "Katie",
    phoneNumber: "555-555-5555",
    email: "hello@goodbye.com",
    id: 1234
  }
];

var waitlist = [
{
    name: "John",
    phoneNumber: "555-555-5555",
    email: "hello@goodbye.com",
    id: 1233
  }
];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
