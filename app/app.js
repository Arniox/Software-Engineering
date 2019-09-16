const express = require("express");
const index = require("../app/routes/index.route");

const app = express();
const port = process.env.PORT;

app.set("views", "app/views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(index);

app.listen(port, () => console.log(`App listening on port ${port}!`));
