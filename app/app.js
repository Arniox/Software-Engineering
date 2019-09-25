const express = require("express");
const index = require("../app/routes/index.route");
const checkout = require("./routes/checkout.route");
const auth = require("../app/routes/auth.route");
const trees = require("../app/routes/trees.route");

const app = express();
const port = process.env.PORT;

app.set("views", "app/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(index);
app.use("/checkout", checkout);
app.use("/auth", auth);
app.use("/trees", trees);

app.listen(port, () => console.log(`App listening on port ${port}!`));
