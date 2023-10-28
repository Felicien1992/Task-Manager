const getAllTask = (req, res) => {
    res.send('all task');
};

const createTask = (req, res) => {
    res.json(req.body);
    // res.send('createTask');
};

const getTask = (req, res) => {
    res.send('GetTask');
};

const updateTask = (req, res) => {
    res.json({ id: req.params.id });
    // res.send('update Task');
};

const deleteTask = (req, res) => {
    // res.send('deleteTask');
    res.json({ id: req.params.id });
};


module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask }