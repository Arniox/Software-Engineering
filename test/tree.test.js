const assert = require("assert");
const Tree = require("../app/models/tree.model");

/*const newTree = new Tree({
    name: "TestTree",
    maxHeight: "10101010 metres",
    averageHeight: "Really Tall",
    description: "A Tree to test trees",
    price: 5,
    image: "(T R E E)"
}); */

describe("Unit tests for Tree Model", function() {

    it("Should add a tree to the database", function(done){
        Tree.deleteMany({});
        var newTree = new Tree({name: "TestTree1", maxHeight: 1, averageHeight: 1, description: "A Tree", price: 0, image: "/"})
        newTree.save()
            .then(() => {
                assert(!newTree.isNew);
                done();
            })
            .catch((err) => { console.log(err)});
    });

    it("Should read a tree from the database", function(done){
        Tree.deleteMany({});
        var newTree = new Tree({name: "TestTree2", maxHeight: 1, averageHeight: 1, description: "A Tree", price: 0, image: "/"})

        newTree.save().catch();

        Tree.find({})
            .then((tree) => {
                assert(tree.name !== null);
                done();
            })
            .catch((err) => { console.log(err)});
    });

    it("Should delete trees from the database", function(done){
        Tree.deleteMany({name: "TestTree3"})
            .then(() => Tree.countDocuments({name: "TestTree3"}))
            .then((tree) => {
                assert(tree == 0);
                done();
            })
            .catch((err) => { console.log(err)});

    });
});