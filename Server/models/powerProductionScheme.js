const mongoose = require("mongoose");

const powerProductionSchema = new mongoose.Schema({

    ID: {
        type: String,
        required: true,
    },
    DateTime: {
        type: String,
        required: true,
    },
    KilowattProduction: {
        type: String,
        required: true,
    },
    WindDirection: {
        type: String,
        required: true,
    },
});

const powerProductionScheme = mongoose.model("PowerProduction", powerProductionSchema);

module.exports = powerProductionScheme;