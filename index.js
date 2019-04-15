const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const hbs = require("express-handlebars");
const port = process.env.PORT || 3000;

let totalConnections = [];
let urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + "/server/public/"));

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/server/views/layouts"
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/server/views");

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log("listening on *:3000");
});
