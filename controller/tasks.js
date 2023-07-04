const getAllTask = (req, res) => {
    res.send('all items')
}

const createTask = (req, res) => {
    res.send('create task')
}

const getTask = (req, res) => {
    res.send('get a single task')
}

const updateTask = (req, res) => {
    res.send('update a task')
}

const deleteTask = (req, res) => {
    res.send('delete a task')
}
module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}