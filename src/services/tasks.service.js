const tasks = []

const getAllTasks = () => tasks;
const getTaskByID = (id) => tasks.filter(task => task.id === id);
const deleteTaskByID = (id) => tasks.filter(task => task.id !== id);
const updateTask = (task, newTask) => {
    const updatedTask = {
        ...task,
        ...newTask,
    }
    return updatedTask;
}
const addTask = (task) => {
    tasks.push(task);
    return task;
}

exports.tasksService = {
    getAllTasks,
    getTaskByID,
    deleteTaskByID,
    updateTask,
    addTask,
};


