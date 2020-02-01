const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const gunInfo = new Schema({
    location: String,
    date: { type: Date, default: Date.now },
    cloud_url: String,
    image_url: String,
})
module.exports = mongoose.model("Places", Places)

