const ResItemModel = require("../models/resItemModel")
module.exports = function () {
    const model = new ResItemModel();

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