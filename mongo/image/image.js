
const express = require("express");
const meth = express.Router()

meth.post("/", (req, res) => {
    console.log(req)
})

module.exports = meth