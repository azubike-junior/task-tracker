const { register, login, deleteUsers, getTasksByUser } = require('../api/controller/auth');
const verifyUser = require('../api/middlewares/auth');
const getUser = require('../api/middlewares/user');

const userRoute = require('express').Router();

userRoute.post('/', register);
userRoute.post('/login', login);
userRoute.delete('/', deleteUsers);
userRoute.get('/task', verifyUser, getUser, getTasksByUser);

module.exports = userRoute