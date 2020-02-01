
const express = require("express");
const meth = express.Router()

meth.post("/", (req, res) => {
    console.log(req.body)
})

module.exports = meth