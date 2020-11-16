var express = require("express");
var router = express.Router();

var ProductController = require("../controllers/product.controller");

router.get("/productFromDB", ProductController.GetProductFromDB);
router.get("/productById/:id", ProductController.GetProductById);
router.post("/storeProduct", ProductController.StoreProductInfo);
router.put("/updateProduct/:id", ProductController.UpdateProductInfo);
router.delete("/deleteProductById/:id", ProductController.DeleteProductInfo);

module.exports = router;
