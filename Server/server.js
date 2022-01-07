require('dotenv').config({path:"./.env"})
const cors = require("cors");
const express = require('express');
const mongoose = require("mongoose");

const windmills = require("./routes/windmillRoute");
const powerProduction = require("./routes/powerProductionRoute");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use("/vindmolle", windmills);
app.use("/elproduktion", windmills);


app.listen(process.env.PORT || 5444,() =>{
    console.log("server is running")
});