const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI).catch((err) => console.log(err));
