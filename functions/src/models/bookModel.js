module.exports = function () {
    const Joi = require('joi');
    const COLLECTIONNAME = "Book";
    const CrudUtil = require('../@common/crudModelUtil')
    const crudUtil = new CrudUtil(COLLECTIONNAME);

    const modelSchema = Joi.object().keys({
        initialDate: Joi.date().required(),
        finalDate: Joi.date().required(),
        user: Joi.string().email().required(),
        invitedUserList: Joi.array(),
        confirmedUserList: Joi.array(),
        presentUserList: Joi.array(),
        resourceList: Joi.array(),
        isConfirmed: Joi.bool(),
        isApproved: Joi.bool(),
        isDeleted: Joi.bool()
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