var express = require("express");
var router = express.Router();

var CompanyController = require("../controllers/company.controller");

router.get("/companyFromDB", CompanyController.GetCompanyFromDB);
router.get("/companyById/:id", CompanyController.GetCompanyById);
router.post("/storeCompany", CompanyController.StoreCompanyInfo);
router.put("/updateCompany/:id", CompanyController.UpdateCompanyInfo);
router.delete("/deleteCompanyById/:id", CompanyController.DeleteCompanyInfo);

module.exports = router;