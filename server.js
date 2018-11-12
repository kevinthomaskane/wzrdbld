const dotenv = require("dotenv");

const envfile =
  process.env.NODE_ENV === "production"
    ? ".env" // production
    : ".dev.env"; // development
dotenv.config({
  silent: true,
  path: `${__dirname}/${envfile}`
});

const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  path = require("path"),
  db = process.env.MONGO_DEV,
  PORT = process.env.PORT || 3001;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());



if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose
  .connect(db)
  .then(() => console.log("mongo connected"))
  .catch(error => console.log(error));
}

require("./routes/api")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.use(express.static("./client/public"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
