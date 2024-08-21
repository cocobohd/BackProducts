// UXItKFQIxIFyoyzK

const mongoose = require("mongoose");
const DB_HOST = "mongodb+srv://bohdan:UXItKFQIxIFyoyzK@cluster0.sv60j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB_HOST)
    .then(() => console.log("DB Okay"))
    .catch(() => console.log("DB Failed"))