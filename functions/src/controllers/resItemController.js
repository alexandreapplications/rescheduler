const ResItemModel = require("../models/resItemModel");
var resItemModel = new ResItemModel();

module.exports = function () {
    this.getList = (req, res) => {
        resItemModel.getList().then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    const IDREGEX = /^[a-z_0-9]+$/g;
    this.getSingle = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            res.status.send("Invalid id");
        }

        resItemModel.getSingle(id).then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    this.insert = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            res.status.send("Invalid id");
        }

        resItemModel.insert(id, req.body).then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    this.update = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            res.status.send("Invalid id");
        }

        resItemModel.update(id, req.body).then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    this.delete = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            res.status.send("Invalid id");
        }


        resItemModel.delete(id, req.body).then(response => {
            res.status(200).send(response);
            return response;
        }).catch(error => {
            res.status(400).send(error);
        });
    }

    return this;
}