const express = require("express");
const router = express.Router();
const Image = require("./schema");
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
var fs = require('fs'),request = require('request');


var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};




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

router.get("/", (req, res) => {
    Image.find({}, (err, data) => {
        console.log(data)
        var map = [];
        data.forEach(info => {
            map.push(info);
        });

        res.status(200).send(map);
    });
});

module.exports = router;