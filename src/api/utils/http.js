const { BAD_REQUEST, CREATED, SERVER_ERROR, SUCCESS, NOT_FOUND } = require("../constants")

const badRequest = (res, message) => {
    res.status(BAD_REQUEST).json({message})
}

const createResponse = (res, data) => {
    res.status(CREATED).json(data)
}

const serverError = (res) => {
    res.status(SERVER_ERROR).send({message: 'something usual happened! please try again'})
}

const successResponse = (res, data) => {
    res.status(SUCCESS).json(data)
}

const notFound = (res, message) => {
    res.status(NOT_FOUND).json({message})
}

module.exports = {badRequest, createResponse, serverError, successResponse, notFound}
