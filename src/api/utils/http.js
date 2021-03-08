const { BAD_REQUEST, CREATED, SERVER_ERROR, SUCCESS, NOT_FOUND } = require("../constants")

const badRequest = (res, data) => {
    res.status(BAD_REQUEST).json(data)
}

const createResponse = (res, data) => {
    res.status(CREATED).json({data})
}

const serverError = (res, data) => {
    res.status(SERVER_ERROR).send('something usual happened! please try again')
}

const successResponse = (res, data) => {
    res.status(SUCCESS).json(data)
}

const notFound = (res, data) => {
    res.status(NOT_FOUND).json(data)
}

module.exports = {badRequest, createResponse, serverError, successResponse, notFound}
