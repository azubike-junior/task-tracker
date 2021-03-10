const Task = require('../../database/models/task');
const { successResponse, notFound, createResponse } = require('../utils/http');

const getTasks = async (req, res) => {
    const tasks = await Task.find()
    return successResponse(res, tasks)
}

const postTask = async (req, res) => {
    const { text, day } = req.body;
    const newTask = {text, day, reminder: null}
    const task = new Task(newTask);
    await task.save();   

    return createResponse(res, task)
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

module.exports = {updateTask, deleteTaskById, postTask, getTaskById, getTasks, deleteTasks}