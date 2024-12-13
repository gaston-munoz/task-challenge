const express = require('express');
const tasksController = require('../controllers/tasks.controller');
const { validateTask } = require('../validators/tasks.validator');

const router = express.Router();

router
  .route('/id')
  .get(tasksController.getByID)
  .put(validateTask, tasksController.update)
  .delete(tasksController.delete)


router
  .route('/')
  .get(tasksController.getAll)
  .post(validateTask, tasksController.create)

exports.tasksRouter = router;
