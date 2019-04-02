const DomainModel = require("../models/domainModel");
var controllerModel = new DomainModel();
const responseUtil = require("../@common/responseUtil");

module.exports = function () {
    this.getList = (req, res) => {
        controllerModel.getList().then(response => {
            responseUtil.okResponse(res, null, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, null, error)
        });
    }

    const IDREGEX = /^[a-z_0-9]+$/g;
    this.getSingle = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            responseUtil.invalidIdResponse(res, id)
            return
        }

        controllerModel.getSingle(id).then(response => {
            responseUtil.okResponse(res, id, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, id, error)
        });
    }

    this.insert = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            responseUtil.invalidIdResponse(res, id)
            return
        }

        controllerModel.insert(id, req.body).then(response => {
            responseUtil.okResponse(res, id, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, id, error)
        });
    }

    this.update = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            responseUtil.invalidIdResponse(res, id)
            return
        }

        controllerModel.update(id, req.body).then(response => {
            responseUtil.okResponse(res, id, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, id, error)
        });
    }

    this.delete = (req, res) => {
        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            responseUtil.invalidIdResponse(res, id)
            return
        }

        controllerModel.delete(id, req.body).then(response => {
            responseUtil.okResponse(res, id, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, id, error)
        });
    }

    return this;
}