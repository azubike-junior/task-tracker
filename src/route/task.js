const { getTasksByUser } = require('../api/controller/auth');
const { getTasks, postTask, getTaskById, updateTask, deleteTaskById, deleteTasks } = require('../api/controller/task');
const verifyUser = require('../api/middlewares/auth');
const getUser = require('../api/middlewares/user');

const taskRoute = require('express').Router();

taskRoute.get('/', verifyUser, getTasks);
taskRoute.get('/:_id', verifyUser, getTaskById)
taskRoute.post('/', verifyUser, getUser, postTask);
taskRoute.put('/:_id', verifyUser, updateTask)
taskRoute.delete('/:_id', verifyUser, deleteTaskById)
taskRoute.delete('/', deleteTasks);

module.exports = taskRoute 