module.exports = function () {
    const Joi = require('joi');
    const COLLECTIONNAME = "ResItem";
    const CrudUtil = require('../@common/crudModelUtil')
    const crudUtil = new CrudUtil(COLLECTIONNAME);

    const modelSchema = Joi.object().keys({
        domain: Joi.string().required(),
        name: Joi.string().required(),
        infrastructureDescription: Joi.string().required(),
        maxUsers: Joi.number().min(0).max(100000),
        resourceType: Joi.string().required(),
        location: Joi.string().required(),
        // Availability: {
        //     Begin, End, Minor Time, Max Time
        // } 
        picture: Joi.array().items(Joi.string().uri()),
        usersToApprove: Joi.array().items(Joi.string().uri()),
        usersToNotify: Joi.array().items(Joi.string().uri())
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