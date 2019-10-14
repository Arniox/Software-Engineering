const assert = require("assert");
const User = require("../app/models/user.model");

const newUser = new User({
    firstName: "TestFirstName",
    lastName: "TestLastName",
    email: "testUser@test.com",
    salt: "SALT",
    hash: "HASH"
}); 
User.deleteMany({});
describe("Unit tests for the User Model", function() {

    it("Should add a User to the database", function(done){
        User.deleteMany({}).catch();
        newUser.save()
        .then(() => {
                assert(!newUser.isNew);
                done();
            })
            .catch((err) => { console.log(err)});

    });

    it("Should read a User from the database", function(done){
        User.deleteMany( { } ).catch();
        newUser.save().catch();
        User.findOne({lastName: "TestLastName"})
        .then((user) => {
            assert(user.lastName === "TestLastName");
            done();
        })
        .catch((err) => { console.log(err)});

    });

    it("Should delete trees from the database", function(done){
        var newUser = new User({firstName:"Test", lastName:"3", email:"testUser2@test.com", salt: "/", hash: "/"})
        newUser.save();
        User.deleteMany({lastName: "3"})
            .then(() => User.countDocuments({firstName: "3"}))
            .then((user) => {
                assert(user == 0);
                done();
            })
            .catch((err) => { console.log(err)});
    });
});