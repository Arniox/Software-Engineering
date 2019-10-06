
function home(req, res) {
    res.render("index.view.ejs", { htmlTitle: "Home" });
}

module.exports = { home };