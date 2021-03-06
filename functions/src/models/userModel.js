module.exports = function () {
    const Joi = require('joi');
    const COLLECTIONNAME = "User";
    const CrudUtil = require('../@common/crudModelUtil')
    const crudUtil = new CrudUtil(COLLECTIONNAME);

    const modelSchema = Joi.object().keys({
        name: Joi.string().min(6).max(30).required(),
        email: Joi.string().email(),
        phones: Joi.array(),
        domains: Joi.array()
    })

    this.getList = () => {
        return crudUtil.getList();
    }

    this.getSingle = (id) => {
        return crudUtil.getSingle(id);
    }

    this.insert = (id, model) => {
        return crudUtil.insert(id, model, modelSchema);
    }

    this.update = (id, model) => {
        return crudUtil.update(id, model, modelSchema)
    }

    this.delete = (id) => {
        return crudUtil.delete(id);
    }

    return this;
}