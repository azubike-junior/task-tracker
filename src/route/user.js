const { register, login, deleteUsers, getTasksByUser } = require('../api/controller/auth');

const userRoute = require('express').Router();

userRoute.post('/', register);
userRoute.post('/login', login);
userRoute.delete('/', deleteUsers)
userRoute.get('/:_id', getTasksByUser)

module.exports = userRoute