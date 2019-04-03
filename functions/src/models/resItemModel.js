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


    this.getList = (domain) => {
        return crudUtil.getList();
    }

    this.getSingle = (domain, id) => {
        return crudUtil.getSingle(`${domain}-${id}`);
    }

    this.insert = (domain, id, model) => {
        return crudUtil.insert(`${domain}-${id}`, model, modelSchema);
    }

    this.update = (domain, id, model) => {
        return crudUtil.update(`${domain}-${id}`, model, modelSchema)
    }

    this.delete = (domain, id) => {
        return crudUtil.delete(`${domain}-${id}`);
    }

    return this;
}