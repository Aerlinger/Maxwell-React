let express = require("express");
let path = require("path");

var app = express();
var port = 8888;

app.set('views', __dirname + "/views");
app.set('view engine', 'pug');

app.get("/", function (req, res) {
  res.render("index");
});

app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.listen(process.env.PORT || port, function () {
  console.log('Example app listening on port ' + port + '!');
});

