import express from 'express'
import path from 'path'
import { json } from 'body-parser'
import mongoose from 'mongoose'
import getMessageRouter from './routes/getMessageRouter'
import postMessageRouter from './routes/createMessageRouter'
import homeRouter from './routes/homeRouter'



const PORT = process.env.PORT || 3080;
const DB_PATH = 'mongodb://127.0.0.1:27017/secretMessage'


const app = express()
app.use(json())
//app.use(express.static(__dirname + '/statics'))

app.use('/', homeRouter)
app.use('/getMessage', getMessageRouter)
app.use('/createMessage', postMessageRouter)

mongoose.connect(DB_PATH, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to db')
})

app.listen(PORT, () => {
    console.log('Server listening on the port::${port}')

})