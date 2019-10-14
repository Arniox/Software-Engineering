const mongoose = require("../config/mongoose.config");
const validator = require("validator");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        //unique: true,
        validate: (value) => {
            return validator.isEmail(value);
        }
    },
    salt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true,
    }
});

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

userSchema.virtual("password").set(function(password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
});

userSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
    return this.hash === hash;
};

module.exports = mongoose.model("User", userSchema);
