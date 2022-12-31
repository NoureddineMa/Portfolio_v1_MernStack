const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"]
    },
    Image: {
        type: String,
        required: [true, "Please enter a Image"],
    },
    Content: {
        type: String,
        required: [true, "Please enter a Content"],
    }
})

module.exports = mongoose.model("Blog", BlogSchema);