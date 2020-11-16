var mongoose = require("mongoose");
mongoose.pluralize(null);
var CompanySchema = mongoose.Schema;

var CompanySchemaRef = new CompanySchema({
    _id: Number,
    cname: String
})

var CompanyModel = mongoose.model("Company", CompanySchemaRef);
module.exports = CompanyModel;