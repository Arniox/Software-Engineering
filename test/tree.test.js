const assert = require("assert");
const Tree = require("../app/models/tree.model");

const newTree = new Tree({
    name: "TestTree",
    maxHeight: "10101010 metres",
    averageHeight: "Really Tall",
    description: "A Tree to test trees",
    price: 5,
    image: "(T R E E)"
});

describe("Unit tests for Tree Model", function() {

    it("Should add a tree to the database", function(done){
            newTree.save()
                    .then(() => {
                        assert(!newTree.isNew);
                        done();
                    });
    });

    it("Should read a tree from the database", function(done){
        newTree.save();
        Tree.findOne({ name: "TestTree"})
            .then((tree) => {
                assert(tree.name ==="TestTree");
                done();
            });
    });

    it("Should delete trees from the database", function(done){
        Tree.deleteMany({name: "TestTree"})
            .then(() => Tree.countDocuments({name: "TestTree"}))
            .then((tree) => {
                assert(tree == 0);
                done();
            })
    });
});