const DomainModel = require("../models/domainModel")
module.exports = function () {
    const model = new DomainModel();

    this.getList = () => {
        return model.getList();
    }

    this.getSingle = (id) => {
        return model.getSingle(id);
    }

    this.insert = (id, model) => {
        return model.insert(id, model, modelSchema);
    }

    this.update = (id, model) => {
        return model.update(id, model, modelSchema)
    }

    this.delete = (id) => {
        return model.delete(id);
    }

    return this;
}