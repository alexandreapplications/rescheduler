const BookModel = require("../models/userModel")
const Joi = require('joi');
module.exports = function () {
    const model = new BookModel();

    const newUserCommand = Joi.object().keys({
        name: Joi.string().min(6).max(30).required(),
        email: Joi.string().email()
    })

    const userRole = Joi.object().keys({
        userId: Joi.string().required(),
        role: Joi.any().valid('access', 'invited', 'manageAllBooks', 'canBook', 'canManageUser')
    })

    this.insertUser = (domain, data) => {
        return new Promise((resolve, reject) => {
            if ((validationResponse = Joi.validate(model, newUserCommand)).error) {
                reject(validationResponse)
            } else {
                // Verify if the resource are available.
                resolve("ResourceId");
            }
        })
    }

    this.addUserRole = (domain, data) => {
        return new Promise((resolve, reject) => {
            if ((validationResponse = Joi.validate(model, userRole)).error) {
                reject(validationResponse)
            } else {
                // Verify if the resource are available.
                resolve("ResourceId");
            }
        })
    }

    this.removeUserRole = (domain, data) => {
        return new Promise((resolve, reject) => {
            if ((validationResponse = Joi.validate(model, userRole)).error) {
                reject(validationResponse)
            } else {
                // Verify if the resource are available.
                resolve("ResourceId");
            }
        })
    }

    return this;
}