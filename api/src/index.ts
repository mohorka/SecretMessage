import express from 'express'
import path from 'path'
import { json } from 'body-parser'
import mongoose from 'mongoose'
import { getMessage } from './controllers/getMessage'
import { postMessage } from './controllers/postMessage'
import home from './controllers/home'



const PORT = 3080;
const DB_PATH = 'mongodb://127.0.0.1:27017/secretMessage'


const app = express()
app.use(json())
//app.use(express.static(__dirname + '/statics'))

app.get('/', home)
app.get('/getMessage', getMessage)
app.use('/createMessage', postMessage)

mongoose.connect(DB_PATH, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err
    console.log('connected to db')
})

const server = app.listen(PORT, () => {
    console.log('Server listening on the port ${PORT}')

})

process.on('SIGINT', () => {
    console.log('Closing server')
    server.close(() => {
        console.log('server closed')
        mongoose.connection.close(false, () => {
            console.log('MongoDb connection closed')
        })
        process.exit(0)
    })

})