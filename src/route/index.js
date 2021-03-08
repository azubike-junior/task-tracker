const taskRoute = require('./task');
const userRoute = require('./user');

const appRouter = require('express').Router();

appRouter.use('/task', taskRoute);
appRouter.use('/auth', userRoute);

module.exports = appRouter;