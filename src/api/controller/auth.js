const User = require('../../database/models/user');
const { badRequest, createResponse, successResponse } = require('../utils/http');
const { generateToken } = require('../utils/jwt');


const register = async (req, res) => {
    const {username, password} = req.body;

    console.log('===user', username, password)

    const existingUser = await User.findOne({username});
    
    if(existingUser) {
        return badRequest(res, 'User is not Available')
    }

    const user = new User({
        username,
        password
    })

    await user.save();
    const token = generateToken(user._id.toString())
    return createResponse(res, token)
}

const login = async (req, res) => {
    const {username, password} = req.body;

    const user = await User.findOne({username});

    if(!user){
        return badRequest(res, 'Invalid Login credentials') 
    }

    if(!user.isMatchPassword(password)) {
        return badRequest(res, 'Invalid Login credentials')
    }
    const token = generateToken(user._id.toString())
    return successResponse(res, token)
}

const deleteUsers = async(req, res) => {
    await User.deleteMany();
    return successResponse(res, 'users deleted')
}

const getTasksByUser = async (req, res) => {
    console.log('============================', req)
    const {_id} = req.user
    console.log('===========', _id)
    const user = await User.findOne({_id}).populate('tasks')

    return successResponse(res, user.tasks);
}

module.exports = {register, login, deleteUsers, getTasksByUser}  
