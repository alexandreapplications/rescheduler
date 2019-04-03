const ResItemModel = require("../models/resItemModel")
module.exports = function () {
    const model = new ResItemModel();

    this.getList = (domain) => {
        return model.getList(domain);
    }

    this.getSingle = (domain, id) => {
        return model.getSingle(domain, id);
    }

    this.insert = (domain, id, record) => {
        return model.insert(domain, id, record, modelSchema);
    }

    this.update = (domain, id, record) => {
        return model.update(domain, id, record, modelSchema)
    }

    this.delete = (domain, id) => {
        return model.delete(domain, id);
    }

    return this;
}