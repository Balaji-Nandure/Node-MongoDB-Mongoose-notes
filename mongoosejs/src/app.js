/** @format */

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// connection creation
mongoose
    .connect("mongodb://localhost:27017/balaji")
    .then(() => {
        console.log("connection success");
    })
    .catch((err) => console.log(err));
