const Task = require('../../database/models/task');
const User = require('../../database/models/user');
const { successResponse, notFound, createResponse } = require('../utils/http');

const getTasks = async (req, res) => {
    const tasks = await Task.find()
    return successResponse(res, tasks)
}

const postTask = async (req, res) => {
    const {body: {text, day, reminder}, user} = req;
    const newTask = {text, day, reminder, user: user._id}
    const task = new Task(newTask);
    await task.save(); 

    const userFound = await User.findOne({_id: user._id})
    userFound.tasks.push(task);
    await userFound.save()

    userFound.password = undefined

    return createResponse(res, userFound)
}


const getTaskById = async  (req, res) => {
    const {_id} = req.params
    console.log(_id)
    const task = await Task.findOne({_id})

    if(!task){
        return notFound(res, 'task not found')
    }
    return successResponse(res, task)
}

const getUserOfTask = async (req, res) => {
    const {_id} = req.params;
    const task = await Task.findOne({_id}).populate('user')

    return successResponse(res, task)
}

const deleteTaskById = async (req, res) => {
    const {_id} = req.params
    const task = await Task.findOne({_id})

    if(!task){
        return notFound(res, 'task not found')
    }

    await Task.deleteOne({_id})
    return successResponse(res, 'task deleted')
}

const updateTask = async (req, res) => {
    const {params:{_id}, body:{reminder}} = req
    await Task.updateOne({_id}, {reminder});

    const updTask = await Task.findOne({_id})

    return createResponse(res, updTask)
}
const deleteTasks = async (req, res) => {
    await Task.deleteMany();
    return successResponse(res, 'tasks has been deleted')
}

module.exports = {updateTask, deleteTaskById, postTask, getTaskById, getTasks, deleteTasks, getUserOfTask}