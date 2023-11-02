const Task = require('../models/Task')

const getAllTask = async (req, res) => {
    // res.send('Get all task')
    const alltask = await Task.get(req, res)
    res.status(201).json({ alltask })
    res.json(req.body)
};

const createTask = async (req, res) => {

    // const task = await Task.create({name:'first task'})
    const task = await Task.create(req.body)
    res.status(201).json({ task })
    res.json(req.body)
    // res.send('create One Task');
};

const getTask = async (req, res) => {
    const getTask = await Task.get(req, res)
    res.status(200).json({ getTask })
    res.json({ id: req.params.id });
    // res.send('Get One Task');
};

const updateTask = async (req, res) => {
    const update = await Task.post(req, res)
    res.status(201).json({ update })
    res.json(req.body);
    // res.send('update Task');
};

const deleteTask = async (req, res) => {
    const delet = await Task.delete(req, res)
    res.status(200).json({ delet })
    // res.send('deleteTask');
    res.json({ id: req.params.id });
};


module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask }