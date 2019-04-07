const ResTypeModel = require("../models/resTypeModel")
module.exports = function () {
    const model = new ResTypeModel();

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

    return this;
}