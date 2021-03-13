const { getTasks, postTask, getTaskById, updateTask, deleteTaskById, deleteTasks } = require('../api/controller/task');
const getUser = require('../api/middlewares/user');

const taskRoute = require('express').Router();

taskRoute.get('/', getTasks);
taskRoute.get('/:_id', getTaskById)
taskRoute.post('/:_id', getUser, postTask);
taskRoute.put('/:_id', updateTask)
taskRoute.delete('/:_id', deleteTaskById)
taskRoute.delete('/', deleteTasks);

module.exports = taskRoute 