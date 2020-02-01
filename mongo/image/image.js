const express = require("express");
const router = express.Router();
const Image = require("./schema");
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();


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