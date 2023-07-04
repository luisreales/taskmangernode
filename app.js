const express = require('express')
const app = express()
//Routes configuration
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const port = 3000
//TO READ THE DOT.ENVIRONMENT
require('dotenv').config()


//connect to database
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI).client.connect()
        app.listen(port,console.log(`Welcome to server in the port ${port}`))
    } catch (error) {
        
    }
}

//middleware
app.use(express.json())
//routes

app.get('/hello',(req, resp) =>{
    resp.send('Welcome to the task manager')
})


app.use('/api/v1/tasks',tasks)
//app.get('/api/v1/tasks) -get all tasks
//app.post('/api/v1/tasks) - create a new tas
//app.get('/api/v1/tasks/:id) - get a simple task
//app.patch('/api/v1/tasks/:id) - update task
//app.delete('/api/v1/tasks/:id) - delete a task

start()