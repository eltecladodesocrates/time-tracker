require('./db/mongoose')
const express = require('express')
const hbs = require('hbs')
const path = require('path')

const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicPath))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/tasks', (req, res) => {
    const task = new Task({
        description: "programming"
    })
    task.save().then(() => {
        res.send(task)
    }).catch((e) => {
        console.log(e)
    })
})

app.listen(port, () => {
    console.log(`Server up and running at port ${port}`)
})