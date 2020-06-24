const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require('./models')
const port = 3000
app.use(bodyParser({
    exrtented : true
}))

models
    .sequelize
    .sync()
    .then (app.listen(port, ()=>{
        console.log(`'Server Running on ${port}`)
    } ))