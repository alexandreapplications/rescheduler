module.exports = function () {
    const Joi = require('joi');
    const COLLECTIONNAME = "Domain";
    const CrudUtil = require('../@common/crudModelUtil')
    const crudUtil = new CrudUtil(COLLECTIONNAME);

    const modelSchema = Joi.object().keys({
        name: Joi.string().required(),
        picture: Joi.string().uri(),
        users: Joi.array().items(Joi.string().email())
    })


    this.getList = () => {
        return crudUtil.getList();
    }

    this.getSingle = (id) => {
        return crudUtil.getSingle(id);
    }

    this.insert = (id, model) => {
        console.log("Inserting")
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