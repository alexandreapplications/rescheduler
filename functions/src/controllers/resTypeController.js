const ResTypeModel = require("../models/resTypeModel");
var resTypeModel = new ResTypeModel();

exports.getList = (req, res) => {
    resTypeModel.getList().then(response => {
        res.status(200).send(response);
        return response;
    }).catch(error => {
        res.status(404).send(error);
    });
}