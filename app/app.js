const express = require("express");
const index = require("../app/routes/index.route");
const checkout = require("./routes/checkout.route");
const login = require("../app/routes/login.route");
const register = require("../app/routes/register.route");

const app = express();
const port = process.env.PORT;

app.set("views", "app/views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(index);
app.use(checkout);
app.use(login);
app.use(register);

app.listen(port, () => console.log(`App listening on port ${port}!`));
