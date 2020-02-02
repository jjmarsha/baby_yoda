const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const db = "mongodb+srv://baby:baby@cluster0-tp62r.mongodb.net/test?retryWrites=true&w=majority";
const bodyParse = require("body-parser");
const morgan = require("morgan");
const api = require("./api")

//MiddleWare
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, 'webapp','build')));

//Prevent CORS And Allow PUT,POST,DELETE,PATCH,GET
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"),
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "*");
    return res.status(200).json({});
  }
  next();
});

app.use("/api", api);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'webapp', 'build','index.html'));
})



mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const port = process.env.PORT || 8100;
app.listen(port, "0.0.0.0", () => console.log("Running Server at " + port));
