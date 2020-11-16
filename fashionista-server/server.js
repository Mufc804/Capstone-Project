var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var port = 9090;
var config = require("./DB");

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(config.DB).then(
    () => { console.log("Database is connected") },
    err => { console.log("Cannot connect to the database" + err) }
)

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

var Product = require("./routes/product.router");
var Company = require("./routes/company.router");
var User = require("./routes/user.router");

server.use("/product", Product);
server.use("/company", Company);
server.use("/user", User);

server.listen(port, () => console.log(`Server is running on port ${port}`));
