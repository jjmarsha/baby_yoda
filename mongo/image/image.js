const express = require("express");
const router = express.Router();
const Image = require("./schema");
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


router.post("/", async(req, res) => {
    const data = {
        cloud_url: req.body.cloud_url,
        image_url: req.body.image_url
    };

    const [result] = await client.faceDetection(`gs://my-project-test-cv.appspot.com/${data.image_url}`);
    const faces = result.faceAnnotations;
    if(faces.length > 0) {
        console.log("uploaded")
        let image = new Image(data);
        image
            .save()
            .then(image => res.status(200).json(image))
            .catch(err => res.status(500).send(err));
    } else {
        console.log("No face");
    }

})

router.get("/", (req, res) => {
    Image.find({}, (err, data) => {
        var map = [];
        data.forEach(info => {
            map.push(info);
        });

        res.status(200).send(map);
    });
});

module.exports = router;