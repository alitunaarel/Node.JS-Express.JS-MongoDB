const express = require("express");
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");

const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const generateDate = require('./helpers/generateDate').generateDate;
const expressSession = require('express-session');





mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
});

app.use(expressSession({
  secret:'testotesto',
  resave: false,
  saveUninitialized: true
}))

app.use(fileUpload());

app.use(express.static("public"));




app.engine("handlebars", expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  }),exphbs({helpers: {generateDate:generateDate}})
);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// const myMiddleware = (req, res, next) => {
//   console.log("object");
//   next();
// };

// app.use("/", myMiddleware);

const main = require("./routes/main");
const posts = require("./routes/posts");
const users = require("./routes/users");
app.use("/", main);
app.use("/posts", posts);
app.use("/users", users);

app.listen(port, hostname, () => {
  console.log(` Example app listening, http://${hostname}:${port}/`);
});

//Node.JS - Express.JS - MongoDB 21  7:29

