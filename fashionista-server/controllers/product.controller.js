var ProductModel = require("../models/product.model");

var GetProductFromDB = (req, res) => {
    ProductModel.find({}, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
}

var GetProductById = (req, res) => {
    ProductModel.findById(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ "msg": "Product found successfully"});
    })
}

var StoreProductInfo = (req, res) => {
    let product = new ProductModel({
        _id: req.body._id,
        pname: req.body.pname,
        details: req.body.details,
        image: req.body.image,
        price: req.body.price,
        company: req.body.company
    })

    product.save((err, result) => {
        if (err) throw err;
        res.json({ "msg": "Product stored successfully" });
    })
}

var UpdateProductInfo = (req, res) => {
    ProductModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.json({ "msg": "Product updated successfully" });
    })
}

var DeleteProductInfo = (req, res) => {
    var deleteId = req.params.id;
    ProductModel.deleteOne({ _id: deleteId }, (err, result) => {
        if (err) throw err;
        if (result.deletedCount > 0) {
            res.json({ "msg": "Product deleted successfully" });
        } else {
            res.json({ "msg": "Product not present" });
        }
    })
}

module.exports = { GetProductFromDB, GetProductById, StoreProductInfo, UpdateProductInfo, DeleteProductInfo }