const mongoose = require("../config/mongoose.config");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => {
            return validator.isEmail(value);
        }
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("User", userSchema);
