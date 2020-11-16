var mongoose = require("mongoose");
mongoose.pluralize(null);
var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema({
    _id: Number,
    pname: String,
    details: String,
    image: String,
    price: Number,
    company: { type: ProductSchema.Types.String, ref: 'Company' }
});

var ProductModel = mongoose.model("Product", ProductSchemaRef);
module.exports = ProductModel;