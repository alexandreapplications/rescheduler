const DomainService = require("../service/domainService");
var service = new DomainService();
const responseUtil = require("../@common/responseUtil");

module.exports = function() {
  this.getList = (req, res) => {
    service
      .getList()
      .then(response => {
        responseUtil.okResponse(res, null, response);
        return response;
      })
      .catch(error => {
        responseUtil.errorResponse(res, null, error);
      });
  };

  const IDREGEX = /^[a-z_0-9]+$/g;
  this.getSingle = (req, res) => {
    const id = req.params.id;
    if (!IDREGEX.test(id)) {
      responseUtil.invalidIdResponse(res, id);
      return;
    }

    service
      .getSingle(id)
      .then(response => {
        responseUtil.okResponse(res, id, response);
        return response;
      })
      .catch(error => {
        responseUtil.errorResponse(res, id, error);
      });
  };

  this.insert = (req, res) => {
    const id = req.params.id;
    if (!IDREGEX.test(id)) {
      console.error(`Id [${id}] was reported as invalid`);
      responseUtil.invalidIdResponse(res, id);
      return;
    }

    service
      .insert(id, req.body)
      .then(response => {
        responseUtil.okResponse(res, id, response);
        return response;
      })
      .catch(error => {
        responseUtil.errorResponse(res, id, error);
      });
  };

  this.update = (req, res) => {
    const id = req.params.id;
    if (!IDREGEX.test(id)) {
      responseUtil.invalidIdResponse(res, id);
      return;
    }

    service
      .update(id, req.body)
      .then(response => {
        responseUtil.okResponse(res, id, response);
        return response;
      })
      .catch(error => {
        responseUtil.errorResponse(res, id, error);
      });
  };

  this.delete = (req, res) => {
    const id = req.params.id;
    if (!IDREGEX.test(id)) {
      responseUtil.invalidIdResponse(res, id);
      return;
    }

    service
      .delete(id, req.body)
      .then(response => {
        responseUtil.okResponse(res, id, response);
        return response;
      })
      .catch(error => {
        responseUtil.errorResponse(res, id, error);
      });
  };

  return this;
};
