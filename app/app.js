const express = require("express");
const indexRouter = require("../app/routes/index.route");

const app = express();
const PORT = 3000;

app.set("views", "app/views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(indexRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
