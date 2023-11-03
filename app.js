require('./db/connect')
const express = require('express');
const app = express()
const port = 9000
const task = require('./routes/task')
const connectDB = require('./db/connect') 
require('dotenv').config() //npm install dotenv =>uko 

// app.use(express.json())
app.use(express.json());
app.use(express.static('./public'))


app.use('/api/v1/tasks', task);

//route

app.get('/', (req, res) => {
    res.send('Welcom to our Website');
})

app.get('/hello', (req, res) => {
    res.send('Task Manage App');
})
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL) 
            app.listen(port, () => {
                console.log(`server is listeaning on port ${port}`)
            });

        }catch(error){
            console.log(error)

        }
    }
start()





//app.get('/api/v1/tasks')             -Gett all task
//app.post('/api/v1/tasks')            -Create a new task
//app.get('/api/v1/tasks/:id')             -Gett single task
//app.patch('/api/v1/tasks/:id')             -Update task
//app.delete('/api/v1/tasks/:id')             -delete task


// router.route('/').get(getAllTasks).post(createTask)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

// module.exports = router



