const Task = require('../models/Task')

const getAllTask = (req, res) => {
    // res.send('Get all task')
    res.json(req.body)
};

const createTask = async (req, res) => {

    // const task = await Task.create({name:'first task'})
     const task = await Task.create(req.body)
     res.status(201).json({task})
     res.json(req.body)
    // res.json(req.body);
    // res.send('create One Task');
};

const getTask = (req, res) => {
    res.json({ id: req.params.id });
    // res.send('Get One Task');
};

const updateTask = (req, res) => {
    res.json(req.body);
    // res.send('update Task');
};

const deleteTask = (req, res) => {
    // res.send('deleteTask');
    res.json({ id: req.params.id });
};


module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask }