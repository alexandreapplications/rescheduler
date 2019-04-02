exports.invalidIdResponse = function (res, id) {
    res.status(400).send(createResponse(false, id, `Id [${ id }] is inválid`, null));
}

exports.errorResponse = function (res, id, error) {
    if (error.error) {
        res.status(400).send(createResponse(false, id, "An Error has occurred", error));
    } else {
        res.status(400).send(createResponse(false, id, "An Error has occurred", {
            error: error
        }));
    }
}

exports.okResponse = function (res, id, data, responseCode) {
    res.status(responseCode || 200).send(createResponse(true, id, "Operation succeeded", data))
}

function createResponse(success, id, message, data) {
    return {
        success: success,
        id: id,
        message: message || "",
        data: data
    }
}