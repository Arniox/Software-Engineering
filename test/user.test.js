const assert = require("assert");
const User = require("../app/models/user.model");

const newUser = new User({
    firstName: "TestFirstName",
    lastName: "TestLastName",
    email: "testUser@test.com",
    salt: "SALT",
    hash: "HASH"
});

describe("Unit tests for the User Model", function() {

    it("Should add a User to the database", function(done){
        User.deleteMany({firstName: "TestFirstName"});
        newUser.save()
            .then(() => {
                assert(!newUser.isNew);
                done();
            })
            .catch((err) => {});

    });

    it("Should read a User from the database", function(done){
        User.deleteMany({firstName: "TestFirstName"});
        newUser.save();
        User.findOne({ firstName: "TestFirstName"})
            .then((user) => {
                assert(user.firstName ==="TestFirstName");
                done();
            })
            .catch((err) => { console.log(err)});

    });

    it("Should delete trees from the database", function(done){
        User.deleteMany({firstName: "TestFirstName"})
            .then(() => User.countDocuments({firstName: "TestFirstName"}))
            .then((user) => {
                assert(user == 0);
                done();
            })
    });
});