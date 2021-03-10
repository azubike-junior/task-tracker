const Task = require('../../database/models/task');
const { successResponse, notFound, createResponse } = require('../utils/http');

const getTasks = async (req, res) => {
    const tasks = await Task.find()
    return successResponse(res, {data: tasks})
}

const postTask = async (req, res) => {
    const { text, day } = req.body;
    const newTask = {text, day, reminder: false}
    const task = new Task(newTask);
    await task.save();   

    return createResponse(res, {data: task})
}


const getTaskById = async  (req, res) => {
    const {_id} = req.params
    console.log(_id)
    const task = await Task.findOne({_id})

    if(!task){
        return notFound(res, {message: 'task not found'})
    }
    return successResponse(res, {data: task})
}

const deleteTaskById = async (req, res) => {
    const {_id} = req.params
    const task = await Task.findOne({_id})

    if(!task){
        return notFound(res, {message: 'task not found'})
    }

    await Task.deleteOne({_id})
    return successResponse(res, {message:'task deleted'})
}

const updateTask = async (req, res) => {
    const {params:{_id}, body:{reminder}} = req
    await Task.updateOne({_id}, {reminder});

    const updTask = await Task.findOne({_id})

    return createResponse(res, {data: updTask})
}
const deleteTasks = async (req, res) => {
    Task.remove();
    return successResponse(res, {message:'tasks has been deleted'})
}

module.exports = {updateTask, deleteTaskById, postTask, getTaskById, getTasks, deleteTasks}