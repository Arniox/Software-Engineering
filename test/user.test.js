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
        var newUser = new User({firstName:"Test", lastName:"1", email:"testUser@test.com", salt: "/", hash: "/"})
        newUser.save()
            .then(() => {
                assert(!newUser.isNew);
                done();
            })
            .catch((err) => { console.log(err)});

    });

    it("Should read a User from the database", function(done){
        var newUser = new User({firstName:"Test", lastName:"2", email:"testUser@test.com", salt: "/", hash: "/"})

        User.deleteMany({lastName: "2"});
        newUser.save();
        User.findOne({ lastName: "2})
            .then((user) => {
                assert(user.lastName ==="2");
                done();
            })
            .catch((err) => { console.log(err)});

    });

    it("Should delete trees from the database", function(done){
        User.deleteMany({lastName: "3"})
            .then(() => User.countDocuments({firstName: "3"}))
            .then((user) => {
                assert(user == 0);
                done();
            })
            .catch((err) => { console.log(err)});
    });
});