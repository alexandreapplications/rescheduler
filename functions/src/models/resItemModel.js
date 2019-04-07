module.exports = function () {
    const Joi = require('joi');
    const COLLECTIONNAME = "ResItem";
    const CrudUtil = require('../@common/crudModelUtil')

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


    this.getList = (domainKey) => {
        const crudUtil = new CrudUtil(COLLECTIONNAME, domainKey);
        return crudUtil.getList();
    }

    this.getSingle = (domainKey, id) => {
        const crudUtil = new CrudUtil(COLLECTIONNAME, domainKey);
        return crudUtil.getSingle(id);
    }

    this.insert = (domainKey, id, model) => {
        const crudUtil = new CrudUtil(COLLECTIONNAME, domainKey);
        return crudUtil.insert(id, model, modelSchema);
    }

    this.update = (domainKey, id, model) => {
        const crudUtil = new CrudUtil(COLLECTIONNAME, domainKey);
        return crudUtil.update(id, model, modelSchema)
    }

    this.delete = (domainKey, id) => {
        const crudUtil = new CrudUtil(COLLECTIONNAME, domainKey);
        return crudUtil.delete(id);
    }

    return this;
}