const mongoose = require("../config/mongoose.config");

var Schema = mongoose.Schema;

var promoSchema = new Schema({
    promoCodeString: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("PromoCode", promoSchema);