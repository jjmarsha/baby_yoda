image_mongo = require("./mongo/image/image")

const routes = [
    {
        url: "/image",
        methods: image_mongo
    },
]

module.exports = routes