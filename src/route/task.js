const { getTasks, postTask, getTaskById, updateTask, deleteTaskById } = require('../api/controller/task');

const taskRoute = require('express').Router();

taskRoute.get('/', getTasks);
taskRoute.get('/:_id', getTaskById)
taskRoute.post('/', postTask);
taskRoute.put('/:_id', updateTask)
taskRoute.delete('/:_id', deleteTaskById)

module.exports = taskRoute