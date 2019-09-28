const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const users = require("../models/user.model");

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
}, (email, password, done) => {
    users.findOne({ email }, (err, user) => {
        if (err) { 
            return done(err); 
        }
        if (!user) {
            return done(null, false, { message: "Incorrect username." });
        }
        if (!user.validatePassword(password)) {
            return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser((id, done) => {
    users.findById(id, (err, user) => {
        done(err, user);
    });
});

module.exports = passport;
