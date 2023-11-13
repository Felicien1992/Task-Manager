const express = require('express')//express intergration
const router = express.Router()//Router methods  on express to comminicate with the middleware.

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;