const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
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
    },
    link: {
        type: String,
    },
})

module.exports = mongoose.model("Project", ProjectSchema);