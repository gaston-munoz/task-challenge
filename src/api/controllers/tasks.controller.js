const { tasksService } = require("../../services/tasks.service");

exports.create = (req, res) => {
  const { task } = req.body;
  tasksService.addTask(task)

  res.send(task)
};

exports.getAll = (_, res) => {
  res.send(tasksService.getAllTasks());
};

exports.getByID = (req, res) => {
  const { id } = req.params;
  const task = tasksService.getTaskByID(id);

  if (!task) {
    return res
      .status(404)
      .send({ messaje: 'task not found' })
  }

  res.send(task);
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    const existsTask = tasksService.getTaskByID(id);

    if (!task) {
        return res
        .status(404)
        .send({ messaje: 'task not found' })
    }

    const updatedTask = tasksService.updateTask(id, existsTask, task);

    res.send(updatedTask);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  const existsTask = tasksService.getTaskByID(id);

  if (!existsTask) {
      return res
      .status(404)
      .send({ messaje: 'task not found' })
  }

  tasksService.deleteTaskByID(id);

  res.send(existsTask);
};
