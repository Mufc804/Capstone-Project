var CompanyModel = require("../models/company.model");

var GetCompanyFromDB = (req, res) => {
    CompanyModel.find({}, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
}

var GetCompanyById = (req, res) => {
    CompanyModel.findById(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ "msg": "Company found successfully"})
    })
}

var StoreCompanyInfo = (req, res) => {
    let company = new CompanyModel({
        _id: req.body._id,
        cname: req.body.cname
    })

    company.save((err, results) => {
        if (err) {
            res.json({ "msg": "Id must be unique" });
        } else {
            res.json({ "msg": "Company stored successfully" })
        }
    })
}

// var UpdateCompanyInfo = (req, res) => {
//     var updateId = req.body._id;
//     var updateName = req.body.cname;
//     CompanyModel.update({ _id: updateId }, { $set: { cname: updateName } }, (err, result) => {
//         if (err) throw err;
//         if (result.nModified > 0) {
//             res.json({ "msg": "Company updated successfully" });
//         } else {
//             res.json({ "msg": "Company not updated" });
//         }
//     })
// }

var UpdateCompanyInfo = (req, res) => {
    CompanyModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.json({ "msg": "Company updated successfully" });
    })
}

var DeleteCompanyInfo = (req, res) => {
    var deleteId = req.params.id;
    CompanyModel.deleteOne({ _id: deleteId }, (err, result) => {
        if (err) throw err;
        if (result.deletedCount > 0) {
            res.json({ "msg": "Company deleted successfully" });
        } else {
            res.json({ "msg": "Company not present" });
        }
    })
}

module.exports = { GetCompanyFromDB, GetCompanyById, StoreCompanyInfo, UpdateCompanyInfo, DeleteCompanyInfo }