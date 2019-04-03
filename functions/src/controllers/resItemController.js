const ResItemService = require("../service/resItemService");
var service = new ResItemService();
const DomainService = require("../service/domainService");
const domainService = new DomainService();
const responseUtil = require("../@common/responseUtil");

module.exports = function () {
    const IDREGEX = /^[a-z_0-9]+$/g;

    this.getList = (req, res) => {
        const domain = req.params.domain;
        if (!domainService.isDomainValid(domain)) {
            responseUtil.invalidDomainResponse(res, domain);
            return;
        }

        service.getList(domain).then(response => {
            responseUtil.okResponse(res, null, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, null, error)
        });
    }

    this.getSingle = (req, res) => {
        const domain = req.params.domain;
        if (!domainService.isDomainValid(domain)) {
            responseUtil.invalidDomainResponse(res, domain);
            return;
        }

        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            responseUtil.invalidIdResponse(res, id)
            return
        }

        service.getSingle(domain, id).then(response => {
            responseUtil.okResponse(res, id, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, id, error)
        });
    }

    this.insert = (req, res) => {
        const domain = req.params.domain;
        if (!domainService.isDomainValid(domain)) {
            responseUtil.invalidDomainResponse(res, domain);
            return;
        }

        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            responseUtil.invalidIdResponse(res, id)
            return
        }

        service.insert(domain, id, req.body).then(response => {
            responseUtil.okResponse(res, id, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, id, error)
        });
    }

    this.update = (req, res) => {
        const domain = req.params.domain;
        if (!domainService.isDomainValid(domain)) {
            responseUtil.invalidDomainResponse(res, domain);
            return;
        }

        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            responseUtil.invalidIdResponse(res, id)
            return
        }

        service.update(domain, id, req.body).then(response => {
            responseUtil.okResponse(res, id, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, id, error)
        });
    }

    this.delete = (req, res) => {
        const domain = req.params.domain;
        if (!domainService.isDomainValid(domain)) {
            responseUtil.invalidDomainResponse(res, domain);
            return;
        }

        const id = req.params.id;
        if (!IDREGEX.test(id)) {
            responseUtil.invalidIdResponse(res, id)
            return
        }

        service.delete(domain, id, req.body).then(response => {
            responseUtil.okResponse(res, id, response)
            return response;
        }).catch(error => {
            responseUtil.errorResponse(res, id, error)
        });
    }

    return this;
}