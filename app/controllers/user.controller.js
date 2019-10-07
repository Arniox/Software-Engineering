const User = require("../models/user.model");
const passport = require("../config/passport.config");

const controller = {
    showLoginPage: (req, res) => {
        return res.render("login.view.ejs");
    },

    showRegisterPage: (req, res) => {
        return res.render("register.view.ejs");
    },

    createUser: (req, res, next) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        });

        user.save()
            .then(() => {
                console.log("User registration successfull.");
                return res.redirect("/user/login");
            })
            .catch((error) => {
                if (error.name == "MongoError" && error.code == 11000) {
                    res.redirect("/user/register");
                } else {
                    next(error);
                }
            });
    },

    login: (req, res, next) => {
        const authenticate = passport.authenticate("local", (error, user) => {
            if (error) { 
                return next(error);
            } else if (!user) { 
                return res.redirect("/user/login"); 
            } else req.logIn(user, (error) => {
                if (error) {
                    return next(error);
                } else {
                    console.log(`${user.email} has logged in.`);
                    return res.redirect("/");
                }
            });
        });

        authenticate(req, res, next);
    },

    logout: (req, res) => {
        const user = req.user;
        if (user) {
            req.logout();
            console.log(`${user.email} has logged out.`);
        }
        return res.redirect("/");
    }
};

module.exports = controller;
