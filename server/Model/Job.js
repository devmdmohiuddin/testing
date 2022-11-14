const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        buildername: String,
        builderjobnumber: String,
        r_ajobnumber: String,
        jobaddress: String,
        lotnumber: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("jobSchema", jobSchema);
