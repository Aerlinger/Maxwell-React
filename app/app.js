var express = require("express");

var app = express();

var port = 8888;

app.set('views', __dirname);
app.set('view engine', 'pug');

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(process.env.PORT || port, function () {
  console.log('Example app listening on port ' + port + '!');
});

