const { notAuthenticated } = require("../utils/http")
const jwt = require('jsonwebtoken')
const User = require('../../database/models/user');
const { decodeToken } = require("../utils/jwt");


const verifyUser = async (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if(typeof bearerToken === 'undefined'){
        return notAuthenticated(res, 'no bearer token')
    } 
    const token = bearerToken.split(" ")[1]
    const decoded = decodeToken(token);

    const user = await User.findOne({_id: decoded.user_id})

    try{
        if(!user){
            return notAuthenticated(res, 'user not authenticated')
        }
        req.user = user
        next()
    }catch(e){
        return notAuthenticated(res, 'please signin to continue')
    }
}

module.exports = verifyUser;