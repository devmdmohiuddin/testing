const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        builderjobNumber: String,
        rajobnumber: String,
        buildername: String,
        jobaddress: String,
        lotnumber: String,
        taskCategory: String,
        sitecuts: {
            inspection: String,
            amount: String,
            import_export: String,
            operator: String,
            notes: String,
            from: String,
            to: String
        },
        r_w: {
            inspection: String,
            operator: String,
            notes: String,
            from: String,
            to: String
        },
        piers: {
            inspection: String,
            numberofpiers: String,
            operator: String,
            notes: String,
            from: String,
            to: String
        },
        spoil: {
            numberofloads: String,
            operator: String,
            notes: String,
            from: String,
            to: String
        },
        bases: {
            inspectioncompany: String,
            operator: String,
            notes: String,
            from: String,
            to: String
        },
        pours: {
            pump: String,
            concrete: String,
            crew: String,
            notes: String,
            from: String,
            to: String
        },
        steels: {
            inspectioncompany: String,
            steel: String,
            crew: String,
            notes: String,
            from: String,
            to: String
        },
        drainage: {
            rock: String,
            r_winspection: String,
            drainsinspection: String,
            photos: String,
            notes: String,
            from: String,
            to: String
        }

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("taskSchema", taskSchema);
