const mongoose = require("mongoose");

const windmillSchema = new mongoose.Schema({

    ID: {
        type: String,
        required: true,
    },
    Navn: {
        type: String,
        required: true,
    },
    GPS: {
        type: String,
        required: true,
    },
    Model: {
        type: String,
        required: true,
    }
});

const windmillScheme = mongoose.model("windmill", windmillSchema);

module.exports = windmillScheme;