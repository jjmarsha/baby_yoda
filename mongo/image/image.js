
const express = require("express");
const router = express.Router()
const Image = require("./schema")

router.post("/", (req, res) => {
    const data = {
        cloud_url: req.body.cloud_url,
        image_url: req.body.image_url
    };

    let image = new Image(data);
    image
        .save()
        .then(image => res.status(200).json(image))
        .catch(err => res.status(500).send(err));
})

module.exports = router