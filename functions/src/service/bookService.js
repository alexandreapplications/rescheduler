const BookModel = require("../models/bookModel")
const Joi = require('joi');
module.exports = function () {
    const model = new BookModel();

    const bookResourceCommand = Joi.object().keys({
        initialDate: Joi.date().required,
        finalDate: Joi.date(),
        user: Joi.string().email().required(),
        invitedUserList: Joi.array()
    })

    const editBookingCommand = Joi.object().keys({
        bookId: Joi.string().required(),
        initialDate: Joi.date().required(),
        finalDate: Joi.date(),
        invitedUserList: Joi.array()
    })

    const deleteBookCommand = Joi.object().keys({
        bookId: Joi.string().required()
    })

    const updateUserCommand = Joi.object().keys({
        bookId: Joi.string().required(),
        userName: Joi.string().require(),
        operation: Joi.any().allow('invite', "uninvite", "confirm", "unconfirm", "present", "unpresent")
    })

    this.bookResources = (domain, data) => {
        return new Promise((resolve, reject) => {
            if ((validationResponse = Joi.validate(model, bookResourceCommand)).error) {
                reject(validationResponse)
            } else {
                // Verify if the resource are available.
                resolve("ResourceId");
            }
        })
    }

    this.editBooking = (domain, data) => {
        return new Promise((resolve, reject) => {
            if ((validationResponse = Joi.validate(model, editBookingCommand)).error) {
                reject(validationResponse)
            } else {
                // Verify if the resource are available.
                resolve("ResourceId");
            }
        })
    }

    this.deleteBooking = (domain, data) => {
        return new Promise((resolve, reject) => {
            if ((validationResponse = Joi.validate(model, deleteBookCommand)).error) {
                reject(validationResponse)
            } else {
                // Verify if the resource are available.
                resolve("ResourceId");
            }
        })
    }

    this.updateUser = (domain, book, user) => {
        return new Promise((resolve, reject) => {
            if ((validationResponse = Joi.validate(model, updateUserCommand)).error) {
                reject(validationResponse)
            } else {
                // Verify if the resource are available.
                resolve("ResourceId");
            }
        })
    }

    function HasConflit(domain, book) {
        return new Promise((resolve, reject) => {
            resolve("Conflict list")
        })
    }

    return this;
}