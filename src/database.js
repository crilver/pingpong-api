const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/smarttwigs")
.then(() => console.log("DataBase is connected"))
.catch(err => console.log(err))