const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wisemeal-api", {useNewUrlParser:true, useUnifiedTopology:true, autoIndex:true});
