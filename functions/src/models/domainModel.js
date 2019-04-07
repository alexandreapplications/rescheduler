module.exports = function () {
    const Joi = require('joi');
    const COLLECTIONNAME = "Domain";
    const CrudUtil = require('../@common/crudModelUtil')
    const crudUtil = new CrudUtil(COLLECTIONNAME);

    const modelSchema = Joi.object().keys({
        name: Joi.string().required(),
        picture: Joi.string().uri()
    })


    this.getList = () => {
        return crudUtil.getList();
    }

    this.getSingle = (id) => {
        return crudUtil.getSingle(id);
    }

    this.insert = (id, record) => {
        return crudUtil.insert(id, record, modelSchema);
    }

    this.update = (id, record) => {
        return crudUtil.update(id, record, modelSchema)
    }

    this.delete = (id) => {
        return crudUtil.delete(id);
    }

    return this;
}