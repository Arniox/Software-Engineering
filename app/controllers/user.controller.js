const User = require("../models/user.model");

function showLoginPage(request, response) {
    response.render("login.view.ejs");
}

function showRegisterPage(request, response) {
    response.render("register.view.ejs");
}

function createUser(request, response) {
    const user = new User({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password
    });

    user.save()
        .then(() => {
            console.log("User registration successfull");
            response.redirect("/user/login");
        })
        .catch((error) => {
            console.log(error);
            response.end();
        });
}

module.exports = { showLoginPage, showRegisterPage, createUser };