const mongoose = require("mongoose");

const serviceListSchema = new mongoose.Schema({

    ID: {
        type: String,
        required: true,
    },
    Task: {
        type: String,
        required: true,
    },
    Scheduled: {
        type: String,
        required: true,
    },
    Done: {
        type: String,
        required: true,
    },
});

const powerProductionScheme = mongoose.model("Service List", serviceListSchema);

module.exports = powerProductionScheme;