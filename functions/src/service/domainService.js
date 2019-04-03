const DomainModel = require("../models/domainModel")
module.exports = function () {
    const model = new DomainModel();

    this.getList = () => {
        return model.getList();
    }

    this.getSingle = (id) => {
        return model.getSingle(id);
    }

    this.insert = (id, record) => {
        return model.insert(id, record);
    }

    this.update = (id, record) => {
        return model.update(id, record)
    }

    this.delete = (id) => {
        return model.delete(id);
    }

    this.isDomainValid = (domain) => {
        const IDREGEX = /^[a-z_0-9]+$/g;
        return IDREGEX.test(domain);
    }

    return this;
}