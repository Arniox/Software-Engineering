const mongoose = require("../config/mongoose.config");

var Schema = mongoose.Schema;

var treeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    maxHeight: {
        type: String,
        required: true,
    },
    averageHeight: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Tree", treeSchema);