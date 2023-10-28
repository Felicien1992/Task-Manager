const getAllTask = (req, res) => {
    res.send('all task');
};

const createTask = (req, res) => {
    res.send('createTask');
};

const getTask = (req, res) => {
    res.send('GetTask');
};

const updateTask = (req, res) => {
    res.send('update Task');
};

const deleteTask = (req, res) => {
    res.send('deleteTask');
};


module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask }