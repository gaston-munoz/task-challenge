const express = require('express');
const { tasksRouter } = require('./tasks.routes');


const mainRouter = express.Router();

mainRouter.use('/tasks', tasksRouter)

module.exports = mainRouter;