const Tree = require("../models/tree.model");

function index(request, response) {
    var treesObj;
    Tree.find({}).then((trees) => {
        treesObj = trees;

        console.log(treesObj);
    });

    Tree.find({}).then((trees) => {
        response.render("trees.view.ejs", { htmlTitle: "Trees", trees });
    });
}

function addToCart(req, res) {
    Tree.findById(req.body.id).then((tree) => {
        if (!req.session.cart) {
            req.session.cart = [];
        }
        
        req.session.cart.push(tree);

        res.send({
            success: true, 
            cart: req.session.cart
        });
    });
}

module.exports = { index, addToCart };