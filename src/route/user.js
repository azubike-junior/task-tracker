const { register, login } = require('../api/controller/auth');

const userRoute = require('express').Router();

userRoute.post('/', register);
userRoute.post('/login', login);

module.exports = userRoute