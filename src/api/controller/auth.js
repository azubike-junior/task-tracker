const User = require('../../database/models/user');
const { badRequest, createResponse, successResponse } = require('../utils/http');


const register = async (req, res) => {
    const {username, password} = req.body;

    console.log('===user', username, password)

    const existingUser = await User.findOne({username});
    
    if(existingUser) {
        return badRequest(res, {message: 'User is not Available'})
    }

    const user = new User({
        username,
        password
    }) 

    await user.save();
    return createResponse(res, {data: user})
}

const login = async (req, res) => {
    const {username, password} = req.body;

    const user = await User.findOne({username});

    console.log('====user', user)

    if(!user){
        return badRequest(res, {message:'Invalid Login credentials'})
    }

    if(!user.isMatchPassword(password)) {
        return badRequest(res, {message:'Invalid Login credentials'})
    }

    return successResponse(res, {data: user})
}

module.exports = {register, login}