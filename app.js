var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// var route = require("./route");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// route.init(app, "");
app.use(express.static(path.join(__dirname, "public/../")));
//path.join(__dirname)

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
