const express = require("express")
const image_mongo = require("./mongo/image/image")
const router = express.Router();

router.use("/image", image_mongo);
router.use("/", (req, res) => {
    res.send("Welcome to the Baby Yoda api");
})

module.exports = router