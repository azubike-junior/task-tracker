const jwt = require('jsonwebtoken')
const config = require('../../config/config')

const generateToken = (user_id) => {
    return jwt.sign({user_id}, config.SECRET);
}

const decodeToken = (token) => {
    return jwt.verify(token, config.SECRET)
}

module.exports = {generateToken, decodeToken}