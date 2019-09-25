const tree = require("../models/tree.model");

function index(request, response) {
    const trees = tree.all();
    response.render("trees.view.ejs", trees);
}

function add() {

}

module.exports = { index, add };