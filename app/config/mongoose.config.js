const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    dbName: process.env.DB_NAME
}, (error) => {
    if (error) {
        throw error;
    }  else {
        console.log("Database connection successful");
    }
});

module.exports = mongoose;
