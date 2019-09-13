
function home(request, response) {
    response.render("index.view.ejs");
}

module.exports = { home };