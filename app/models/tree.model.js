const mongoose = require("../config/mongoose.config");

var Schema = mongoose.Schema;

var treeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    soilDrainage: {
        type: String,
        required: true,
    },
    sunCoverage: {
        type: String,
        required: true,
    },
    maintenanceReq: {
        type: String,
        required: true,
    },
    maxHeight: {
        type: String,
        required: true,
    },
    growthRate: {
        type: String,
        required: true,
    },
    price: mongoose.Decimal128,
});

module.exports = mongoose.model("Tree", treeSchema);