const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    dbName: process.env.DB_NAME
}).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log(error);
});

module.exports = mongoose;
