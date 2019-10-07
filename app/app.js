const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("./config/passport.config");
const index = require("../app/routes/index.route");
const checkout = require("./routes/checkout.route");
const user = require("./routes/user.route");
const trees = require("../app/routes/trees.route");
const seed = require("./utils/seedDatabase.js");

const app = express();
const port = process.env.PORT;

// Connect views and static files
app.set("views", "app/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

// Connect middleware
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware
app.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.htmlTitle = "htmlTitle not passed!";
    next();
});

// Connect routes
app.use(index);
app.use("/checkout", checkout);
app.use("/user", user);
app.use("/trees", trees);

//Seed the trees
//seed.trees();
// seed.promoCodes();

app.listen(port, () => console.log(`App listening on port ${port}!`));
