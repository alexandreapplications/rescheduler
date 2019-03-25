const ResTypeModel = require("../models/resTypeModel");
var resTypeModel = new ResTypeModel();

module.exports = function () {
    this.getList = (req, res) => {
        resTypeModel.getList().then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    const IDREGEX = /^\d{1,4}$/;
    this.getSingle = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX) {
            res.status.send("Invalid id");
        }

        resTypeModel.getSingle(id).then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    this.insert = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX) {
            res.status.send("Invalid id");
        }

        resTypeModel.insert(id, req.body).then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    this.update = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX) {
            res.status.send("Invalid id");
        }

        resTypeModel.update(id, req.body).then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    this.delete = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX) {
            res.status.send("Invalid id");
        }


        resTypeModel.delete(id, req.body).then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    return this;
}