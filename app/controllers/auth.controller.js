function login(request, response) {
    response.render("login.view.ejs");
}

function register(request, response) {
    response.render("register.view.ejs");
}

module.exports = { login, register };