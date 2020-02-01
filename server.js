const express = require("express");
const server = express();
const mongoose = require("mongoose");
const db = "mongodb+srv://baby:baby@cluster0-tp62r.mongodb.net/test?retryWrites=true&w=majority";
const bodyParse = require("body-parser");
const morgan = require("morgan");
const api = require("./api")

//MiddleWare
server.use(bodyParse.urlencoded({ extended: true }));
server.use(bodyParse.json());
server.use(morgan("dev"));

//Prevent CORS And Allow PUT,POST,DELETE,PATCH,GET
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"),
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, PATCH, GET");
    return res.status(200).json({});
  }
  next();
});


for(end of api) {
  server.use(end.url, end.methods)
}

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log("Running Server at " + port));
