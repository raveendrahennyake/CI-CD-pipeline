var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('{ "response": "Hello, Welcome to Valaxy" }');
});

app.get("/Doc", function (req, res) {
  res.send('{ "response": "Hello World" }');
});
app.get("/ready", function (req, res) {
  res.send('{ "response": " Great!, It works!" }');
});

//listen to port 4000 by default
app.listen(process.env.PORT || 4000, function () {
  console.log("App listening on port 4000!");
});

module.exports = app;
