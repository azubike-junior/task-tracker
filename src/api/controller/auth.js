const User = require('../../database/models/user');
const { badRequest, createResponse, successResponse } = require('../utils/http');


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
    user.password = undefined
    return createResponse(res, user)
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
    user.password = undefined
    return successResponse(res, user)
}

const deleteUsers = async(req, res) => {
    await User.remove();
    return successResponse(res, 'users deleted')
}

const getTasksByUser = async (req, res) => {
    const {_id} = req.params
    const user = await User.findOne({_id}).populate('tasks')

    return successResponse(res, user.tasks);
}

module.exports = {register, login, deleteUsers, getTasksByUser}  
